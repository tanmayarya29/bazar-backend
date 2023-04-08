const Product = require("../models/Product");
const Brand = require("../models/Brand");
const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");

exports.getProducts = (req, res) => {
	const { type } = req.query;
	if (type) {
		Product.find({ type: type })
			.populate("category", "_id name")
			.populate("brand", "_id name")
			.populate("subcategory", "_id name")
			.then((products) => {
				res.json(products);
			})
			.catch((err) => res.json({ error: err.message }));
	} else {
		Product.find({})
			.populate("category", "_id name")
			.populate("brand", "_id name")
			.populate("subcategory", "_id name")
			.then((products) => res.json(products))
			.catch((err) => res.json({ error: err.message }));
	}
};

exports.postProduct = async (req, res) => {
	try {
		const products = [...req.body];
		await Product.insertMany(products);
		res.status(201).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getProductById = async (req, res) => {
	const { id } = req.params;
	const product = await Product.findOne({ _id: id }).populate("brand");
	res.json({ product });
};

exports.getProductsByCategory = async (req, res) => {
	const { category } = req.params;
	const products = await Product.find({ category });
	res.status(200).json({ products });
};

exports.getMoreForYouProducts = async (req, res) => {
	const products = await Product.aggregate([{ $sample: { size: 12 } }]);
	res.json({ products });
};

exports.getBrands = async (req, res) => {
	try {
		const subCategory = await SubCategory.findOne({
			name: req.params.subCategory,
		});
		let products = await Product.find({
			subcategory: subCategory._id,
		})
			.populate("brand")
			.select("brand");
		const brands = [
			...new Map(
				products.map((item) => [item.brand["name"], item])
			).values(),
		];
		res.json({ brands: [...brands] });
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

exports.getCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		res.json({
			categories,
			success: true,
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

const filterArray = (arr1, arr2) => {
	const filtered = arr1.filter((el) => {
		return arr2.indexOf(el.name) === -1;
	});
	return filtered;
};

const post = async (req, res, Model) => {
	try {
		const data = [...req.body];
		const dataPresent = await Model.find({
			name: {
				$in: data.map((d) => d.name),
			},
		}).exec();
		const names = dataPresent.map((d) => d.name);
		const filteredArray = filterArray(data, names);
		await Model.insertMany(filteredArray);
		res.status(201).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getProductByBrand = async (req, res) => {
	const { brand } = req.params;
	const products = await Product.find({ brand });
	res.status(200).json({ products });
};

exports.postBrand = async (req, res) => {
	post(req, res, Brand);
};

exports.postCategory = (req, res) => {
	post(req, res, Category);
};

exports.postSubCategory = async (req, res) => {
	post(req, res, SubCategory);
};

exports.getSubCategories = async (req, res) => {
	const subCategories = await SubCategory.find({});
	res.status(200).json({ subCategories });
};

exports.deleteSubCategory = async (req, res) => {
	deleteResource(req, res, SubCategory);
};

const deleteResource = async (req, res, Model) => {
	try {
		const { id } = req.params;
		await SubCategory.findByIdAndDelete({ _id: id });
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

//--- search funtionality ---

const getSortBy = (sortBy) => {
	let sort = {};
	if (sortBy === "price: low to high") {
		sort = { sort: { discountedPrice: 1 } };
	} else if (sortBy === "price: high to low") {
		sort = { sort: { discountedPrice: -1 } };
	}
	return sort;
};

const findConditions = (query) => {
	let conditions = {};
	if (query.rating) {
		conditions.rating = {
			$in: query.rating.split(",").map((rating) => Number(rating)),
		};
	}
	if (query.brand) {
		conditions.brand = {
			$in: query.brand.split(","),
		};
	}
	const priceConditions = {};
	if (query.priceFrom) priceConditions.$gte = Number(query.priceFrom);
	if (query.priceTo) priceConditions.$lte = Number(query.priceTo);

	if (Object.keys(priceConditions).length !== 0) {
		conditions.discountedPrice = priceConditions;
	}

	if (query.category) {
		// const category = await Category.findOne({
		// 	name: query.category.toLowerCase(),
		// });
		// if (category) {
		conditions.category = query.category;
		// }
	}

	if (query.subCategory) {
		conditions.subcategory = query.subCategory;
	}

	return conditions;
};

//--- by category ---
exports.getSearchByCategories = async (req, res, next) => {
	const query = req.query;
	const perPage = 9;
	const page = req.query.page || 1;

	const category = await Category.findOne({ name: query.category });
	if (!category) {
		delete query.category;
	} else {
		query.category = category._id;
	}

	const subCategory = await SubCategory.findOne({ name: query.subCategory });
	if (!subCategory) {
		delete query.subCategory;
	} else {
		query.subCategory = subCategory._id;
	}

	const categoryId = await Category.findOne({ name: req.params.category });

	const count = await Product.find({ ...findConditions(query) })
		.where("category")
		.equals(categoryId)
		.count();

	const conditions = findConditions(query);
	if (conditions.brand) {
		delete conditions.brand;
	}
	const products = await Product.find({
		...conditions,
	})
		.where("category")
		.equals(categoryId)
		.populate("brand", "name");

	const brands = new Set();
	products.map((product) => brands.add(product.brand));

	const categories = await Category.findById(categoryId).populate(
		"subCategory"
	);

	Product.find({ ...findConditions(query) }, null, getSortBy(query.sortBy))
		.where("category")
		.equals(categoryId)
		.skip(perPage * page - perPage)
		.limit(perPage)
		.populate("category", "_id name")
		.then((products) => {
			res.json({
				products,
				count,
				brands: [...brands],
				categories: Array(categories),
			});
		})
		.catch((err) => res.json({ error: err.message }));
};

// --- by name ---
exports.getSearchByName = async (req, res, next) => {
	const query = req.query;
	const perPage = 9;
	const page = req.query.page || 1;
	const modifiedName = new RegExp(query.name, "i");

	const category = await Category.findOne({ name: query.category });
	if (!category) {
		delete query.category;
	} else {
		query.category = category._id;
	}

	const subCategory = await SubCategory.findOne({ name: query.subCategory });
	if (!subCategory) {
		delete query.subCategory;
	} else {
		query.subCategory = subCategory._id;
	}

	const count = await Product.find({
		...findConditions(query),
		name: { $regex: modifiedName },
	}).count();

	const conditions = findConditions(query);
	if (conditions.brand) {
		delete conditions.brand;
	}
	const products = await Product.find({
		...conditions,
		name: { $regex: modifiedName },
	}).populate("brand", "name");

	const brands = new Set();
	products.map((product) => brands.add(product.brand));

	const productsCategories = await Product.find({
		name: { $regex: modifiedName },
	})
		.populate("category", "_id name")
		.populate({
			path: "category",
			populate: {
				path: "subCategory",
				model: "SubCategory",
			},
		});

	const categories = new Set();
	productsCategories.map((product) => categories.add(product.category));

	Product.find(
		{
			...findConditions(query),
			name: { $regex: modifiedName },
		},
		null,
		getSortBy(query.sortBy)
	)
		.populate("category", "_id name")
		.populate({
			path: "category",
			populate: {
				path: "subCategory",
				model: "SubCategory",
			},
		})
		.skip(perPage * page - perPage)
		.limit(perPage)
		.populate("brand", "name")
		.then((products) => {
			res.json({
				products,
				count,
				brands: [...brands],
				categories: [...categories],
			});
		})
		.catch((err) => res.json({ error: err.message }));
};

// query.rating
// 	? {
// 			rating: {
// 				$in: query.rating
// 					.split(",")
// 					.map((rating) => Number(rating)),
// 			},
// 	  }
// 	: {},

// query.rating
// 	? {
// 			rating: {
// 				$in: query.rating
// 					.split(",")
// 					.map((rating) => Number(rating)),
// 			},
// 			name: { $regex: modifiedName },
// 	  }
// 	: {
// 			name: { $regex: modifiedName },
// 	  }
