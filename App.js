const express = require("express");
const app =express();
const Router1 = require('./Routes/GenreRoute');
const Router2 = require('./Routes/CustomerRoute');
const Router3 = require('./Routes/MovieRoute');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/genres",{ useNewUrlParser: true,  useUnifiedTopology: true ,useFindAndModify:false } )
    .then(()=>console.log('connected to mongo db'))
    .catch((err)=>console.log(err));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/genres',Router1);
app.use('/customers',Router2);
app.use('/Movies',Router3);
const port = process.env.PORT || "8000";

app.listen(port,()=>{
    console.log("listening")
});
