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

app.get('/home', (request, response) => {
  response.sendFile('/home/bitnami/SCM/MainPage/main_page.html');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})