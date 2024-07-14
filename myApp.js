let express = require('express');
let app = express();
require('dotenv').config();

/*
task 2
app.get('/', (req, res) => {
    res.send('Hello Express');
});
*/

// task 4

app.use("/public", express.static(__dirname + "/public"))

// task 7
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
})

// task 3
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// task 5

// app.get("/json", (req, res) => {
    //res.json({"message" : "Hello json"})
//})


// task 6
app.get("/json", (req, res) => {
    if ( process.env["MESSAGE_STYLE"] == "uppercase"){
        res.json({"message" : "HELLO JSON"})
    } else {
        res.json({"message" : "Hello json"})
    }
})
   

//console.log("Hello World")
































 module.exports = app;
