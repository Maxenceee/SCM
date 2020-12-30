/*
const express = require('express')

const app = express()

app.get('/home', function(request, response){
    response.sendFile('./MainPage/main_page.html');
});
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
  //response.sendFile('./MainPage/main_page.html');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

/*
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
*/