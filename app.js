
const express = require('express')

const app = express()

app.get("/home", function(request, response){
    response = document.getElementById('main_page').innerHTML
})

app.listen(3000)