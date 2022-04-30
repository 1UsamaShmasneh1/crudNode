const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient

const app = express();

MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if(err){
        console.log('Can not connect to mongodb')
        process.exit(1)
    }
    console.log('Connected to mongodb')
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html');
});

app.post('/quotes', (req,res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('Server is listening');
});