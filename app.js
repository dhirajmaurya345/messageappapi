const express=require('express')
const messageRoute=require('./messageRoute')
const app=express()

app.use(express.json());
app.use("/api/v1/messageapp/", messageRoute);

module.exports = app ;
