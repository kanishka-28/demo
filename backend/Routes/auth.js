const express = require("express");
const UserModel = require("../Models/User");
const Router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const fetchUser = require('../MiddleWares/fetchUser');

const JWT_SECRET = 'kanishka$%%gour'

// create a user using post ,No login required
Router.post("/createuser",[
    body('name','enter a valid name').isLength({min:3}),
    body('email','enter a valid mail').isEmail(),
    body('password').isLength({min:5}),

],async (req,res)=>{

    //if there are errors return bad req and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    try {

        //check whether the user with the email already exists
        let user = await UserModel.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: `user with ${req.body.email} email already exists`})
        }

        //generating salt
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //creating new user 
        user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: secPass,
        });

        // creating user data token 
        const data = { 
            User:{
                id: user.id
            }
        }
        const jwtToken = JWT.sign(data, JWT_SECRET,{expiresIn: "2d"});

        res.json({jwtToken, message: `hey ${req.body.name} welcome to iNotebook and ur token is ${jwtToken}`});

    } catch (error) {
        console.log(error);
        res.send.status(500)(`internal server error: ${error}`);
    }
})

//..........................

// authenticate a user using post ,No login required
Router.post("/login",[
    body('email','enter a valid mail').isEmail(),
    body('password', 'password cannot be blank').isLength({min:4}),

],async (req,res)=>{

    //if there are errors return bad req and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    const {email , password} = req.body;

    try {

        //check whether the user with the email already exists
        let user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({error: "enter correct credentials"})
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({error: "enter correct credentials"})
        }

        // sending data 
        const data = { 
            User:{
                id: user.id,
            }
        }
        const jwtToken = JWT.sign(data, JWT_SECRET,{expiresIn: "2d"});

        res.json({jwtToken, message: `hey ${req.body.name} welcome to iNotebook and ur token is ${jwtToken}`});

    } catch (error) {
        console.log(error);
        res.send.status(500)(`internal server error: ${error}`);
    }
});

//.................


// getting details of a loggedin user using Post ,No login required
Router.get("/getuser", fetchUser , async (req,res)=>{

    const userId = req.user.id;

    try {
        const user = await UserModel.findById(userId).select("-password")
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.send.status(500)(`internal server error: ${error}`);
    }
});


module.exports = Router;