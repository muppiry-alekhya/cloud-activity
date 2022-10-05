var express = require('express')

var app = express()

const SERVER_PORT = 3002
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded()) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Hi welcome to cloud computing class!!</h1>");
    res.end();
})

app.get('/name', function (req, res) {
    res.send("<h1>Name: Alekhya!!</h1>");
    res.end();
})

app.get('/contact', function (req, res) {
    res.send("<h1>Contact : muppiry.alekhya49@gmail.com!!</h1>");
    res.end();
})
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})