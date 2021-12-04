const jwt = require("jsonwebtoken");

const fetchuser= async (req,res,next)=>{
    //get the user from the jwt token and add id to req object
    try{
    const token = req.header('token');
    
    if(!token){
        res.status(401).send({error: "please authenticate using a valid token token not found"})
    }
        const data = await jwt.verify(token, "kanishka$%%gour");
        req.user = data.User;
        next();

    }
    catch(error){
        res.status(401).send({error: "please authenticate using a valid token"})
    }
}

module.exports = fetchuser;