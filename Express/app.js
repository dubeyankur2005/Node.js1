const express = require('express');
const http = require('http')

const app = express();

const server = http.createServer(app);

const PORT = 3003;
server.listen (PORT, ()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
})