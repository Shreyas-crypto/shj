const express = require('express0');
const app=express();

app.use(express.static('public'));
app.listen(3000,()=>{
    console.log("Application is started");
})