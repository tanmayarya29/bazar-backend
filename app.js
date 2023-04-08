const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const MONGODB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

// Importing Routes
const shopRoutes = require("./routes/shop.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE, OPTIONS"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, x-access-token"
	);
	next();
});

app.use("/shop", shopRoutes);
app.use("/user", userRoutes);

mongoose
	.connect(MONGODB_URI)
	.then((result) => {
		console.log("DB Connected!");
		app.listen(PORT);
	})
	.catch((err) => {
		console.log(err);
	});
