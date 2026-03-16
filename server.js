const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// memory storage
let users = [];

// GET users
app.get("/users", (req, res) => {

res.status(200).json({
message: "Users fetched successfully",
data: users
});

});

// POST user
app.post("/users", (req, res) => {

const { name, email } = req.body;

// validation check for required fields
if (!name || !email) {
return res.status(400).json({
message: "Name and Email are required"
});
}

const newUser = {
id: users.length + 1,
name,
email
};

users.push(newUser);

res.status(201).json({
message: "User created successfully",
data: newUser
});

});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});