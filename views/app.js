const express = require('express');
const app = express()
const mongoose = require('mongoose')

const DB = 'mongodb://localhost:27017/test'
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(() =>{
    console.log('Connection successful...!')
})

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'name is mandatory']
    },
    age: {
        type: Number,
        required: [true,'age should be a number']
    },
    role:{
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test',testSchema)

const testData = new Test({
    name: 'bruce',
    age: "18",
    role:"QA"
})

testData.save().then(doc=>{
    console.log(doc);
}).catch((err)=>{
    console.log('oops...! u got an error:',err);
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})


//mongodb://localhost:27017