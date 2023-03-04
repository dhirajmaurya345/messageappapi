const express=require("express")
const controller=require("./controller")
const messageRoute = express.Router();

messageRoute
.route("/:id")
.get(controller.recieveMessage)
.post(controller.sendMessage)

messageRoute
.route("/signUp")
.post(controller.singUp)

module.exports = messageRoute;
