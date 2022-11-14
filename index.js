const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(email)
    console.log(password)

    if (email === "abc@gmail.com" && password === "world") {
        res.status(200).json({status : 200, message : "Success"});
    } else {
        res.status(401).json({status : 400, message : "Failed"})
    }
})

app.listen(3003, () => {
    console.log("Server run on port 3003")
})