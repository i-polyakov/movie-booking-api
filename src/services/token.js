const jwt = require("jsonwebtoken");

class TokenService{
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '30m'})
        return accessToken
    }

}

module.exports = new TokenService()