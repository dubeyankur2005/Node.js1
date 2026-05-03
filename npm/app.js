const http = require('http');


// const requestHandler = require('../calculator-project/handler');
const requestHandler = require('../calculator-project/handler');

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT , ()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})


