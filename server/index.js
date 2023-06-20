const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://longtngcd210014:0768104432long@cluster0.pd81jsy.mongodb.net/1925?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to MongoDB");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
}).catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});