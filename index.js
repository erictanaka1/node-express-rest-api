const express = require('express');
const app = express();

const port = process.env.PORT || 3000
const testing = process.env.TESTING

app.listen(
    port,
    () => {
        if(testing) {
            console.log('This is a test');
        }
        console.log(`App listening on port ${port}`);
    }
);

app.get("/", (request, response) => {
    response.send(`<h1>You are on ${request.url}</h1>`);
});