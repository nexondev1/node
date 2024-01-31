const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = '443';

app.use(express.static(__dirname + '/files'));

app.get("/" , (req , res) =>{
    res.sendFile(__dirname + '/files/index.html');
})
app.listen(port, ()=>{
    console.log(`[443SERVER] Server listen on port ${port}`);
})