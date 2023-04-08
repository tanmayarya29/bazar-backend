const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			default: 5,
		},
		reviews: {
			type: Number,
		},
		originalPrice: {
			type: Number,
			default: 0,
			required: true,
		},
		discount: {
			type: Number,
			default: 0,
		},
		discountedPrice: {
			type: Number,
			default: function () {
				return (
					this.originalPrice -
					(this.discount * this.originalPrice) / 100
				);
			},
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
		brand: {
			type: Schema.Types.ObjectId,
			ref: "Brand",
			required: true,
		},
		type: {
			type: Array,
			default: [],
		},
		quantity: {
			type: Number,
			default: 0,
		},
		subcategory: {
			type: Schema.Types.ObjectId,
			ref: "SubCategory",
		},
		imgSrc: {
			type: String,
			required: true,
			default:
				"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640",
		},
	}
	// { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// productSchema.virtual("discountedPrice").get(function () {
// 	return this.originalPrice - (this.discount * this.originalPrice) / 100;
// });

module.exports = mongoose.model(
	"Product",
	productSchema,
	"productswithdiscountedPrice"
);
