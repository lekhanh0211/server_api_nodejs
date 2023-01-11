import express from "express";
import homeController from "../controller/homeController";
import bannerController from "../controller/bannerController";
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

  return app.use("/api/v1", router);
};

export default initWebRouter;
