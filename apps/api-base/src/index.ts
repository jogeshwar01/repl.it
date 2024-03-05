import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Base API Server");
});

app.listen(4000, () => {
    console.log("Base API Server is running on port 4000");
});
