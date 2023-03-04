const express=require("express")
const controller=require("./controller")
const loaddataRoute = express.Router();


loaddataRoute
.route("/")
.post(controller.loadData)

module.exports = loaddataRoute;
