# Auth

## passport
```
npm install passport passport-local passport-kakao passport-jwt bcrypt cookie-parser
```

```shell
mkdir passport
cd passport && touch index.js
touch localStrategy.js
touch kakaoStrategy.js
```

### 미들웨어 확장법

이해를 하고넘어가야함.
(req,res,next) => {  } 
javascript 문법이라면, 그저 화살표 함수일뿐,

express 에서는 미들웨어라고 함.
그렇다면,함수를 실행시킬려면
(req,res,next) => {  }(req,res,next) 로 써야지..


## passport.initialize

## passport.Authenticator

## passport.serializeUser

## passport.deseriallizeUser

## passport.use

## strategy:[local,kakao] 
Strategy[local] 기준으로는 .
일단 객체, 
2개의 인자값을 가진다,
객체, 함수표현


## done


## req.login 
**Return**
- serialzeUser 가 실행됨, 

