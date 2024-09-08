const { Router } = require("express");
const homeRouter = Router();
const homeControllers = require("../controllers/homeController");
homeRouter.get("/", homeControllers.homeController);
homeRouter.get("/login", homeControllers.getlogin);
homeRouter.get("/sign-up", homeControllers.getsignup);
homeRouter.post("/login", homeControllers.postlogin);
homeRouter.post("/sign-up", homeControllers.postsignup);
module.exports = homeRouter;
