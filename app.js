
const express = require('express')

const app = express()

const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile('./MainPage/main_page.html');
});

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
*/

app.listen(3000)

