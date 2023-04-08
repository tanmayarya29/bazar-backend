const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
	},
	birthDate: {
		type: String,
		default: Date,
	},
	tier: {
		type: String,
		enum: ["silver", "gold", "diamond"],
		default: "silver",
	},
	cart: {
		items: [
			{
				product: {
					type: Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
	},
	wishlist: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
	orders: {
		type: Schema.Types.ObjectId,
		ref: "Order",
	},
	awaitingPayments: {
		type: Number,
		default: 0,
	},
	awaitingShipments: {
		type: Number,
		default: 0,
	},
	awaitingDelivery: {
		type: Number,
		default: 0,
	},
	token: {
		type: String,
	},
	resetToken: String,
	resetTokenExpiration: Date
});

module.exports = mongoose.model("User", userSchema);
