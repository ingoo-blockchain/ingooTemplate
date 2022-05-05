const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'ingoo'

module.exports = {
    sign: (user) => {
        const payload = {
            email: user.email,
            nickname: user.nickname
        }

        return jwt.sign(payload, JWT_SECRET,{
            algorithm:'HS256',
            // expiresIn:'1h',
        })
    },
}