
const express = require('express')

const app = express()

app.get("/home", function(request, response){
    response.send("SCM!")
})

app.listen(3000)