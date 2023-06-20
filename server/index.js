const express = require("express");
const app = express();

const Question1 = require("../server/models/Question1");
const Question2 = require("../server/models/Question2");
const Question3 = require("../server/models/Question3");
const Question4 = require("../server/models/Question4");
const Question5 = require("../server/models/Question5");
const Question6 = require("../server/models/Question6");
const Question7 = require("../server/models/Question7");
const Question8 = require("../server/models/Question8");
const Question9 = require("../server/models/Question9");

const mongoose = require("mongoose");
const cors = require("cors");
const { ok } = require("assert");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://longtngcd210014:0768104432long@cluster0.pd81jsy.mongodb.net/Web_1625?retryWrites=true&w=majority", {
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

app.get('/question1', async (req, res) => {
    try {
      const question1Data = await Question1.find();
      res.json(question1Data);
    } catch (error) {
      console.error('Error retrieving question 1:', error);
      res.status(500).json({ error: 'Failed to retrieve question 1' });
    }
});

app.get('/question2', async (req, res) => {
    try {
      const question2Data = await Question2.find();
      res.json(question2Data);
    } catch (error) {
      console.error('Error retrieving question 2:', error);
      res.status(500).json({ error: 'Failed to retrieve question 2' });
    }
});

app.get('/question3', async (req, res) => {
    try {
      const question3Data = await Question3.find();
      res.json(question3Data);
    } catch (error) {
      console.error('Error retrieving question 3:', error);
      res.status(500).json({ error: 'Failed to retrieve question 3' });
    }
});

app.get('/question4', async (req, res) => {
    try {
      const question4Data = await Question4.find();
      res.json(question4Data);
    } catch (error) {
      console.error('Error retrieving question 4:', error);
      res.status(500).json({ error: 'Failed to retrieve question 4' });
    }
});

app.get('/question5', async (req, res) => {
    try {
      const question5Data = await Question5.find();
      res.json(question5Data);
    } catch (error) {
      console.error('Error retrieving question 5:', error);
      res.status(500).json({ error: 'Failed to retrieve question 5' });
    }
});

app.get('/question6', async (req, res) => {
    try {
      const question6Data = await Question6.find();
      res.json(question6Data);
    } catch (error) {
      console.error('Error retrieving question 6:', error);
      res.status(500).json({ error: 'Failed to retrieve question 6' });
    }
});

app.get('/question7', async (req, res) => {
    try {
      const question7Data = await Question7.find();
      res.json(question4Data);
    } catch (error) {
      console.error('Error retrieving question 7:', error);
      res.status(500).json({ error: 'Failed to retrieve question 7' });
    }
});

app.get('/question8', async (req, res) => {
    try {
      const question8Data = await Question8.find();
      res.json(question8Data);
    } catch (error) {
      console.error('Error retrieving question 8:', error);
      res.status(500).json({ error: 'Failed to retrieve question 8' });
    }
});

app.get('/question9', async (req, res) => {
    try {
      const question9Data = await Question9.find();
      res.json(question9Data);
    } catch (error) {
      console.error('Error retrieving question 9:', error);
      res.status(500).json({ error: 'Failed to retrieve question 9' });
    }
});

module.exports = app;