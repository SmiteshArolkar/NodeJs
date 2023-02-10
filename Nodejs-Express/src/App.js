const express = require("express");

const config = require("./config/config")

const app = express();
const port = config.port;

app.listen(port, () => {
    console.log('Listening on Port : ',port);
});

