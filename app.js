var express = require('express');
var app = express();
var routermongo = require('./makanbakso')
app.use(routermongo)

app.get('/', (req,res)=>{
    res.send('Express & MongoDB')
})

app.listen(27017, ()=>{
    console.log('Server aktif @port 27017')
});