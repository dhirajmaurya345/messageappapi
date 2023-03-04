const express=require('express')
const messageRoute=require('./messageRoute')
const loaddataRoute=require('./loaddataRoute')
const app=express()

app.use(express.json());
app.use("/api/v1/loaddata/", loaddataRoute);
app.use("/api/v1/messageapp/", messageRoute);

module.exports = app ;
