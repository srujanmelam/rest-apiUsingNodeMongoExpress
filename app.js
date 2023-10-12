const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/newDB'
//start express
const app = express()

//connecting to database
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})

//connection holder
const con = mongoose.connection

con.on('error', function(err) { console.log(err.message); });
con.once('open', function() {
  console.log("mongodb connection open");
});

app.use(express.json())

//router
const alienRouter = require('./routes/aliens')

//middleware
app.use('/aliens',alienRouter)



app.listen(9000,()=>{
    console.log('server stared')
})