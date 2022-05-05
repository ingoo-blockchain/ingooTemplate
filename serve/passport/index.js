// [5] : 모든 전략을 모아둘수있는 파일 제작
const passport = require('passport');
const local = require('./localStrategy')
const jwt = require('./jwtStrategy')

module.exports = () => {
    // req.login 호출시 실행됨.
    passport.serializeUser((user, done) => {
        const {id,email,nickname,provider} = user
        return done(null, {
            id,
            email,
            nickname,
            provider,
        });
    });

    local()
    jwt()
}