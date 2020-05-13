"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;
const cors = require("cors");


app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/api", routes);
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running: ${port}`);
});