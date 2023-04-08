const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
	res.send("welcome to user");
});

router.post("/signup", userController.postSignup);

router.post("/login", userController.postLogin);

//--- dummy dashboard route to check user ---
router.get("/dashboard", auth, userController.getDashboard);

router.post("/add/cart/:productId", auth, userController.addToCart);

router.post("/remove/cart/:productId", auth, userController.removeFromCart);

router.post("/delete/cart/:productId", auth, userController.deleteFromCart);

//--- edit profile ---
router.put("/profile/edit", auth, userController.putEditProfile);

router.post("/wishlist/:productId", auth, userController.updateWishList);

router.get("/wishlist", auth, userController.getWishlistedProducts);

router.get('/cart', auth, userController.getCart)

router.post('/order', auth, userController.postOrder);

router.get('/order', auth, userController.getOrderSpecificToUser);

//--- forgot password ---
router.post('/forgotpassword', userController.postSendResetMail);
router.get('/reset', userController.getCheckTokenForReset);
router.put('/updatepassword', userController.putNewPassword)

module.exports = router;
