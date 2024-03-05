import express from "express";

const app = express()

app.get('/',(req,res) => {
  res.send("Start writing your code here!")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})