const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {

    res.status(err.statusCode || 500).json({error: err.message});

});

module.exports = app;