const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:Disha2012@cluster0.fjrmf.mongodb.net/newuserapp?");

const User = mongoose.model('Users', { name: String, email: String, password: String });
app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });
    // CRUD => Create, Update, Delete, Read
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.json({
        "msg": "User created successfully"
    });
});
