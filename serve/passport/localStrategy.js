/**
 *  [2] localStategy 생성
 *  require Setting Start
 */
const passport = require('passport') 
const { Strategy: LocalStrategy } = require('passport-local') 
const bcrypt = require('bcrypt') // 암호화를 위해 가져옴
const { User } = require('../models') // User 모델 가져옴,
// require end

// [3-1]: new localStratgy 첫번째 인자값 : 객체
const field = { usernameField: 'email', passwordField: 'password' };

// [3-2]: new localStratgy : 두번째 인자값 : 함수표현
const verify = async (email, password, done) => {
    try {
        // email 내용이 DB 에 존재하는지, 로직적인 부분 코드 작성.
        const user = await User.findOne({
            where: { email }
        })
        
        // user 결과값이 Null 일경우 이후 함수를 빠져나가기 위해 return
        // 과 동시에 done 함수 호출로 내용전달.
        
        if(!user) return done(null, false, { result:null })
        
        // 현상태는 이메일(아이디) 가 존재한 형태이므로, 요청 패스워드 와 DB 패스워드가 일치하는지 비교
        // 블록체인에서 많이 사용하는 기법이니, 확실한 이해도 필요
        const result = await bcrypt.compare(password, user.password) 

        // 패스워드가 일치하지않아서 함수 빠져나감과 동시에, done 함수 호출로 내용전달.
        if(!result) return done(null, false, {result:null})
        
        // 마지막 성공적인 로직처리
        return done(null, user)
    } catch (e) {
        console.log(e)
        return done(e)
    }
}

// [3]  new LocalStrategy() 까지만 적고 각 해당되는, 인자값 내용 따로 만듬.
// new LocalStrategy(field,verify) 


// [4] : [3] 번이 완성되면 passport 에다가 , local 이라는 이름으로, 방금만든 결과물을 등록해줍니다.
module.exports = () => { passport.use('local',new LocalStrategy(field,verify)) }

// Authenticator 