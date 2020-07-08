const express = require('express');
const app = express();

app.get ("/test", (request, response) => {
    let text = "Hello from"; 
    let message = text + "API"; 
    response.send("Hello from API");
});

app.listen(9999, () => {
    console.log("App is listening!");
})

