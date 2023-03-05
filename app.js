const express=require('express')
const cors=require('cors')
const messageRoute=require('./messageRoute')
const app=express()

app.use(cors())
app.use(express.json());
app.use("/api/v1/messageapp/", messageRoute);

module.exports = app ;
