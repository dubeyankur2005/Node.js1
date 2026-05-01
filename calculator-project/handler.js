const sumRequest = require('./sum');
const requestHandler = (req , res) =>{
    console.log(req.url, req.method);

    if(req.url ==="/"){
        res.setHeader('Content-Type' , 'text/html');
        res.write(`
<html>
    <head>
        <title>
            Calculator
        </title>
    </head>
    <body>
        <h1>
            Welcome to the Calculator
        </h1>
        <a href="/Calculator"> Go to Calculator </a>
    </body>
</html>
`);

return res.end();

    }


    else if(req.url ==="/Calculator"){
        res.setHeader('Content-Type' , 'text/html');
        res.write(`
            <html>
    <head>
        <title>
           This is a Calculator
        </title>
    </head>
    <body>
        <h1>
            Welcome to the Calculator
        </h1>
        <form action = "/Calculator-result" method ="POST">
        <input type ="number" placeholder ="First Number"  name ="first">
        <input type ="number" placeholder ="Second Number" name ="Second">
        <input type ="Submit" value = "sum">
        </form>
    </body>
</html>
            `);
            return res.end();

    }




    else if(req.url === "/Calculator-result"  && req.method === "POST"){
            return sumRequest(req, res);
    }







    res.setHeader('Content-Type' , 'text/html');
    res.write(` 
<html>
    <head>
        <title>
            Calculator
        </title>
    </head>
    <body>
        <h1>
            404 Page Does not Exist
        </h1>
        <a href="/"> Go to <b> home </b> </a>
    </body>
</html>
        `)


        res.end();

}

module.exports = requestHandler;
