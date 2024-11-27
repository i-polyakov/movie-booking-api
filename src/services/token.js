const jwt = require("jsonwebtoken");

class TokenService{
    generateToken(payload){
        console.log(process.env.JWT_SECRET, 333);
        if (!process.env.JWT_SECRET)
            throw new Error('secret error')
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: '300m'})
        return accessToken
    }

}

module.exports = new TokenService()