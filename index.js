// console.log("jay Sree Ram");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("Jay Sree Ram");
    console.log("jay Sree Ram");
})

app.get("/ram",(req,res)=>{
    res.send("<h1> Jay Sree Ram </h1>");
})

app.get("/raju",(req,res)=>{
    res.send("<h1> Raju Kumar Pal </h1> <br> <h2> Black Devloper </h2>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2> Raju Kumar Pal </h2> <hr> <h4> Web Devloper </h4>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})