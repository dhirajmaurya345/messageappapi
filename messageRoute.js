const express=require("express")
const controller=require("./controller")
const messageRoute = express.Router();

messageRoute
.route("/")
.get(controller.recieveMessage)
.get(controller.readData)
.post(controller.sendMessage)

messageRoute
.route("/signUp")
.post(controller.singUp)

module.exports = messageRoute;
