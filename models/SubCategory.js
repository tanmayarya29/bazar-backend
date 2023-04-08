const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imgSrc: {
		type: String,
	},
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
