let express = require('express');
let app = express();

/*
task 2
app.get('/', (req, res) => {
    res.send('Hello Express');
});
*/

// task 4

app.use("/public", express.static(__dirname + "/public"))


// task 3
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})






//console.log("Hello World")
































 module.exports = app;
