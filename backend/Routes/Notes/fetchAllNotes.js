const express = require("express");

const Router = express.Router();

Router.get("/", (req, res)=>{
    res.json({key: "kanishka"})
});

module.exports = Router;