import express from "express";
import homeController from "../controller/homeController";
import bannerController from "../controller/bannerController";
import categoryController from "../controller/categoryController";
import productController from "../controller/productController";
import blogController from "../controller/blogController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  //Rest api

  // router.get("/user", userController.getAllUser);
  // router.post("/createUser", userController.postCRUD);
  // router.get("/updateUser", userController.updateUser);
  // router.post("/updatedUser", userController.initUpdateUser);
  // router.get("/deleteUser", userController.deleteUser);

  // router.get("/booking", bookingController.getAllBooking);
  // router.post("/createBooking", bookingController.createBooking);
  // router.get("/updateBooking", bookingController.updateBooking);
  // router.post("/updatedBooking", bookingController.initUpdateBooking);
  // router.get("/deleteBooking", bookingController.deleteBooking);

  // router.post("/api/login", accountController.handleLogin);
  // router.get("/api/getAllUser", accountController.handleGetAllUser);

  router.get("/banner", bannerController.getAllBanner);
  router.post("/createBanner", bannerController.postBanner);
  router.put("/updateBanner", bannerController.putBanner);
  router.delete("/deleteBanner", bannerController.delBanner);

  router.get("/cate", categoryController.getAllCate);
  router.post("/createCate", categoryController.postCate);
  router.put("/updateCate", categoryController.putCate);
  router.delete("/deleteCate", categoryController.delCate);

  router.get("/product", productController.getAllPro);
  router.post("/createPro", productController.postPro);
  router.put("/updatePro", productController.putPro);
  router.delete("/deletePro", productController.deletePro);

  router.get("/blog", blogController.getAllBlog);
  router.post("/createBlog", blogController.postBlog);
  router.put("/updateBlog", blogController.putBlog);
  router.delete("/deleteBlog", blogController.deleteBlog);

  router.get("/user", userController.getAllUser);
  router.post("/createUser", userController.postUser);
  router.put("/updateUser", userController.putUser);
  router.delete("/deleteUser", userController.deleteUser);
  router.post("/user/login",userController.handleLogin);


  return app.use("/api/v1", router);
};

export default initWebRouter;
