const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://longtngcd210014:0768104432long@cluster0.pd81jsy.mongodb.net/1925?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("Server run ok");
});