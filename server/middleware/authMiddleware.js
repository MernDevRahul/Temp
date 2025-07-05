const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{    
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(403).json({message:"Authorization header is required"});
    }
    
    const token = authHeader.split(" ")[1]; 
    if(!token){
        return res.status(403).json({message:"Token is required"});
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET);
        req.user = decoded;
        
        
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid or expired token"});
    }
}
module.exports = verifyToken