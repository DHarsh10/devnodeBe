const express = require("express");

const app = express();

app.use("/text", (req, res) => {
    res.send("Hello from the serverrrrrr");
})

app.use("/hello", (req, res) => {
    res.send("Hello hello hello");
})

app.use("/dashboard", (req, res) => {
    res.send("Hello from dashboard");
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});