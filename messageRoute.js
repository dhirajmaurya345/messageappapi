const express=require("express")
const controller=require("./controller")
const messageRoute = express.Router();

messageRoute
.route("/send")
.post(controller.sendMessage)


messageRoute
.route("/recieve")
.get(controller.recieveMessage)

messageRoute
.route("/group")
.get(controller.recieveGroupMessage)

module.exports = messageRoute;
