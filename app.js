/*
const express = require('express')

const app = express()

app.get('/home', function(request, response){
    response.sendFile('./MainPage/main_page.html');
});
*/

/*
app.get("/home", function(request, response){
    //response.send('main_page')
    var http = require('http'),
    fs = require('fs');

    fs.readFile('./MainPage/main_page.html', function (err, html) {
        if (err) {
            throw err; 
        }       
        http.createServer(function(request, response) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        }).listen(3000);
    });
})
app.listen(3000)
*/

let http = require('http');
let fs = require('fs');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./MainPage/main_page.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};
 
http.createServer(handleRequest).listen(3000);