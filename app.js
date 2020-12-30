
const express = require('express')

const app = express()

app.get("/home", function(request, response){
    //response.send('main_page')
    window.navigate("main_page.html");
})

app.listen(3000)