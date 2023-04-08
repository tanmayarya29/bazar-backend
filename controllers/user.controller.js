const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Order = require("../models/Order");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key:
				"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",
		},
	})
);

exports.postSignup = async (req, res) => {
	User.findOne({ email: req.body.email })
		.then((userDoc) => {
			if (userDoc) {
				throw new Error("User Already Exists");
			}
			bcrypt
				.hash(req.body.password, 12)
				.then((hashedPassword) => {
					const user = new User({
						firstName: req.body.firstName,
						lastName: req.body.lastName,
						email: req.body.email,
						password: hashedPassword,
						phone: req.body.phone,
						cart: { items: [] },
					});
					return user.save();
				})
				.then((result) => {
					res.status(201).json({ message: "success" });
				})
				.catch((err) => {
					res.status(500).json({ error: err.message });
				});
		})
		.catch((err) => {
			res.status(409).json({ error: err.message });
		});
};

exports.postLogin = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email: email })
		.then((userDoc) => {
			if (!userDoc) {
				throw new Error("User does not exists");
			}
			bcrypt
				.compare(password, userDoc.password)
				.then((doMatch) => {
					if (doMatch) {
						const token = jwt.sign(
							{ user_id: userDoc._id, email },
							process.env.TOKEN_KEY,
							{
								expiresIn: process.env.TOKEN_EXPIRY,
							}
						);
						userDoc.token = token;
						return userDoc.save();
					}
					throw new Error("Incorrect Password");
				})
				.then((result) => res.status(200).json(userDoc))
				.catch((err) => res.status(401).json({ error: err.message }));
		})
		.catch((err) => res.status(404).json({ error: err.message }));
};

//-- dummy dashboard controller to check user --

exports.getDashboard = (req, res, next) => {
	User.findOne({ _id: req.user.user_id })
		.then((user) => console.log(user))
		.catch((err) => console.log(err));
	res.json({ message: "welcome to dashboard" });
};

exports.addToCart = async (req, res) => {
	try {
		const { productId } = req.params;
		const user = await User.findById(req.user.user_id);
		const product = user.cart.items.find(
			(item) => item.product.toString() === productId.toString()
		);

		if (!product) {
			user.cart.items.push({ product: productId, quantity: 1 });
		} else {
			product.quantity++;
		}

		await user.save();
		res.json({ success: true });
	} catch (error) {
		res.json({ error: error.message });
	}
};

exports.removeFromCart = async (req, res) => {
	try {
		const { productId } = req.params;
		const user = await User.findById(req.user.user_id);
		const product = user.cart.items.find(
			(item) => item.product.toString() === productId.toString()
		);

		if (product && product.quantity === 1) {
			user.cart.items = user.cart.items.filter(
				(item) => item.product.toString() !== productId.toString()
			);
		} else if (product) {
			product.quantity--;
		}

		await user.save();
		res.json({ success: true });
	} catch (error) {
		res.json({ error: error.message });
	}
};

exports.deleteFromCart = async (req, res) => {
	try {
		const { productId } = req.params;
		const user = await User.findById(req.user.user_id);
		const product = user.cart.items.find(
			(item) => item.product.toString() === productId.toString()
		);

		if (product) {
			user.cart.items = user.cart.items.filter(
				(item) => item.product.toString() !== productId.toString()
			);
		}

		await user.save();
		res.json({ success: true });
	} catch (error) {
		res.json({ error: error.message });
	}
};

exports.putEditProfile = async (req, res) => {
	const updatedFirstName = req.body.firstName;
	const updatedLastName = req.body.lastName;
	const updatePhone = req.body.phone;
	try {
		const user = await User.findById(req.user.user_id);
		user.firstName = updatedFirstName;
		user.lastName = updatedLastName;
		user.phone = updatePhone;
		await user.save();
		// res.json({success: true})
		res.status(200).json(user);
	} catch (error) {
		res.status(204).json({ error: error.message });
	}
};

exports.updateWishList = async (req, res) => {
	try {
		const { productId } = req.params;
		const user = await User.findById(req.user.user_id);
		const product = user.wishlist.find(
			(p) => p.toString() === productId.toString()
		);

		if (product) {
			user.wishlist = user.wishlist.filter(
				(p) => p.toString() !== productId.toString()
			);
		} else {
			user.wishlist.push(productId);
		}

		await user.save();
		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

exports.getWishlistedProducts = async (req, res) => {
	try {
		const wishlistedProducts = await User.findById(req.user.user_id)
			.populate("wishlist")
			.select("wishlist");
		res.json({
			products: wishlistedProducts,
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

exports.getCart = async (req, res) => {
	try {
		const user = await User.findById(req.user.user_id).populate(
			"cart.items.product"
		);

		res.json(user.cart);
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

exports.postOrder = async (req, res) => {
	const { product, totalAmount } = req.body;
	const newOrder = new Order({
		product: product,
		totalAmount: totalAmount,
		user: req.user.user_id,
	});
	try {
		await newOrder.save();
		const user = await User.findById(req.user.user_id);
		user.cart.items = [];
		await user.save();
		return res.status(201).json({ success: true });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getOrderSpecificToUser = async (req, res) => {
	try {
		const orders = await Order.find({ user: req.user.user_id });
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// --- forgot password ---

exports.postSendResetMail = (req, res) => {
	if (!req.body.email) {
		return res.json({ error: "Email is required" });
	}
	User.findOne({ email: req.body.email })
		.then((userDoc) => {
			if (!userDoc) {
				throw new Error("User not found with this email");
			}
			const token = crypto.randomBytes(20).toString("hex");
			userDoc.resetToken = token;
			userDoc.resetTokenExpiration = Date.now() + 3600000;
			return userDoc.save();
		})
		.then((user) => {
			transporter.sendMail({
				to: `${user.email}`,
				from: "mananjay2212@gmail.com",
				subject: "Link To Reset Password",
				text:
					"You are receiving this because you (or someone else) have requested the reset of the password for your account. \n\n" +
					"Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it: \n\n" +
					`${process.env.CLIENT_URL}` +
					`/reset/${user.resetToken}\n\n` +
					"If you did not request this, please ignore this email and your password will remain unchanged.\n",
			});
		})
		.then((result) => res.status(200).json({ success: true }))
		.catch((err) => res.status(404).json({ error: err.message }));
};

exports.getCheckTokenForReset = (req, res) => {
	const resetPasswordToken = req.query.resetPasswordToken;
	User.findOne({
		resetToken: resetPasswordToken,
		resetTokenExpiration: { $gt: Date.now() },
	})
		.then((userDoc) => {
			if (!userDoc) {
				throw new Error("password reset link is invalid or expired");
			}
			return res
				.status(200)
				.json({ message: "reset link is ok", email: userDoc.email });
		})
		.catch((err) => res.status(500).json({ error: err.message }));
};

exports.putNewPassword = (req, res) => {
	if (!req.body.password) {
		return res.json({ error: "Password is required" });
	}
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email: email })
		.then((userDoc) => {
			if (!userDoc) {
				throw new Error("No user found to update");
			}
			bcrypt
				.hash(password, 12)
				.then((hashedPassword) => {
					userDoc.password = hashedPassword;
					userDoc.resetToken = null;
					userDoc.resetTokenExpiration = null;
					return userDoc.save();
				})
				.then((result) =>
					res
						.status(200)
						.json({ message: "password updated successfully" })
				)
				.catch((err) => res.status(500).json({ error: err.message }));
		})
		.catch((err) => res.status(404).json({ error: err.message }));
};
