var express = require('express');
var app = express();
const DBURL =  "mongodb://localhost:27017/test"
var db = require('./configure/database.js')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./router/router'))

db.connect(DBURL, function(err){
    if(err){
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(3000, function(){
            console.log('Listening on port 3000....')
        })
    }
})

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// app.listen(3000, function(){
//     console.log("Magic happens at port 3000")
// })