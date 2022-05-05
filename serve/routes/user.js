const express = require('express')
const bcrypt = require('bcrypt') // 패스워드를 위해, 암호화 라이브러리 가져오기.
const jwt = require('../utils/jwt-util')

const { User, sequelize } = require('../models')
const passport = require('passport')
const user = require('../models/user')
const router = express.Router()

router.post('/join', async (req,res)=>{
    const { email, nickname, password } = req.body
    try {
        // email 중복체크 : Front 에서 체크하나, Back에서 다시한번 체크
        const check = await User.findOne({ where: { email } })
        if ( check ) return res.json({ result:null, msg:'아이디 중복' })

        // 패스워드 암호화
        const hash = await bcrypt.hash(password, 7) 

        // User 등록하기.
        const user = await User.create({ email, nickname, password:hash })
        res.json({
            result:user,
            msg:''
        })
    } catch (e) {
        res.status(500).json({
            result:null,
            msg:'예상치 못한 오류가 발생되었습니다.',
        })
    }
})

router.post('/login', async (req,res)=> {
    // [7] : /user/login 에 요청시 local 전략을 실행하기.

    // passport Authenticator 
    // console.log(req)

    // 1. 전략이름
    // 2. done 함수 호출
    // passport.authenticate()
    
    const done = (error,user,info) => {
        // 오류 검증
        if(error || !user) return res.status(500).json({ error,user,info })
        const {password, createdAt, updatedAt, ...payload} = user.dataValues
        const accessToken = jwt.sign(payload)
        res.json({
            token:accessToken
        })
    }

    passport.authenticate('local',{session: false},done)(req,res)
})

router.post('/me',passport.authenticate('jwt', { session: false }) ,async (req,res)=>{
    // if(!user) return res.status(500).json({ result:null, message:'존재하지 않는 회원입니다.' })

    res.json({
        result:true,
        user:req.user
    })    
})

router.get('/:email', async (req,res)=>{
    const {email} = req.params

    try {
        // 일반 Query 사용 : Join 및 일반적인 쿼리문으로 처리하고싶을경우. 
        const sql = 'SELECT  id, email, nickname, provider, createdAt, updatedAt FROM User WHERE email = :email'

        // 일반쿼리 결과물받기, 기본 [data, metadata] 로 오며, select 조회시, 
        // data 리턴 타입이 array 이여서, 구조분해로 다시한번 배열을 꺼내어씀.
        const [[result], metadata] = await sequelize.query(sql,{
            replacements:{email:email}
        })

        /* 
         * 위에 Query 와 같은 의미 
         * 항목을 지정한다는 것이아니라, password 빼고 모든 항목 가져오기, 
        */
        // const user = await User.findOne({
        //     where:{email:email},
        //     attributes: { exclude: ['password'] }
        // })
        

        res.json({
            result
        })
    } catch (e) {
        res.status(500).json({
            result:null,
        })
    }
})

module.exports = router