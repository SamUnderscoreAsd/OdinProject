let http = require('http');
let fs = require('node:fs');

http.createServer(function(req, res){

    if(req.url === '/' || req.url === ''){
        console.log('on webpage' + res.url);
        res.writeHead(200,{'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/about'){
        console.log('on webpage' + res.url);
        res.writeHead(200,{'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    
    else if(req.url === '/contact'){
        console.log('on webpage' + res.url);
        res.writeHead(200,{'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else{
        console.log('on webpage' + res.url);
        res.writeHead(200,{'Content-type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

}).listen(8080, () =>{
    console.log('Listening on port 8080');
});