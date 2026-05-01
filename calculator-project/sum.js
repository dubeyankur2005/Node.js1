const sumRequest = (req, res) =>{
    console.log(req.url);

    const body =[];
    req.on('data', chunk =>{
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end' , () =>{
        const bodyStr = Buffer.concat(body).toString();
        console.log("this is a body String  " + bodyStr);

        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        console.log('this is the body object ' , bodyObj);

        const result = Number(bodyObj.first) + Number(bodyObj.Second);
        console.log("This is a result " , result);


        // send response
        res.setHeader('Content-Type' , 'text/html');
        res.write(`
            <h1> Result is : ${result} </h1>
            `)
            res.end();
    })
}
module.exports = sumRequest;
