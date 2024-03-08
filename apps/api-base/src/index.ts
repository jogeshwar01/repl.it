import express from "express";
import { add } from "@repo/common";

console.log(add(1, 2));

const app = express();

app.get("/", (req, res) => {
    res.send("Base API Server");
});

app.listen(4000, () => {
    console.log("Base API Server is running on port 4000");
});
