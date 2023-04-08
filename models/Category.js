const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	imgSrc: {
		type: String,
	},
	subCategory: [
		{
			type: Schema.Types.ObjectId,
			ref: "SubCategory",
		},
	],
});

module.exports = mongoose.model("Category", categorySchema);
