const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop.controller");

//-- products --
// '/product?type="flash-deals"'
router.get("/product", shopController.getProducts);

router.post("/product", shopController.postProduct);

router.get("/product/:id", shopController.getProductById);

router.get("/products/more-for-you", shopController.getMoreForYouProducts);

router.get("/brands/:subCategory", shopController.getBrands);

//-- category --
router.get("/category/:category", shopController.getProductsByCategory);

router.post("/category", shopController.postCategory);

router.get("/categories", shopController.getCategories);

//-- brand --
router.get("/brand/:brand", shopController.getProductByBrand);

router.post("/brand", shopController.postBrand);

//-- sub category --
router.post("/sub-category", shopController.postSubCategory);

router.get("/sub-category", shopController.getSubCategories);

router.delete("/sub-category/:id", shopController.deleteSubCategory);

//-- search by category--
router.get("/search/category/:category", shopController.getSearchByCategories);

//-- search by name --
router.get("/search", shopController.getSearchByName);

module.exports = router;
