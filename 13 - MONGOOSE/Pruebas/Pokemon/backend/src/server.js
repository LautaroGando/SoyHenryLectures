const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {

    res.status(err.statusCode || 500).json({error: err.message});

});

module.exports = app;