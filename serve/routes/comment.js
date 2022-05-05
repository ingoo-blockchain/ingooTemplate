const express = require('express')
const router = express.Router()

const {User, Comment} = require('../models')
/**
 * 1.GET 댓글전체조회 limit
 * 2.POST 댓글쓰기
 * 3.POST 댓글수정
 * 4.POST 댓글삭제
 */

router.get('/list', async (req,res)=>{
    try {
        const comment = await Comment.findAll({
            include:{
                model: User,
                attributes: ['id', 'nickname']
            },
            order:[['id','desc']]
        })

        res.json({
            result:comment,
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            result:null,
        })
    }
})

router.post('/write', async (req,res)=>{
    const {UserId, content} = req.body

    try {
        const comment = await Comment.create({UserId, content})

        res.json({
            result:comment
        })
    } catch (e) {
        res.status(500).json({
            result:null
        })
    }
})

router.post('/modify/:id', async (req,res)=>{
    const { id } = req.params
    const { content } = req.body
    try {
        const [idx] = await Comment.update( { content }, { where:{ id } })
        const comment = await Comment.findOne({ where:{id:idx} })

        res.json({
            result:comment
        })
    } catch (e) {
        res.status(500).json({
            result:null
        })
    }
})

router.post('/delete/:id', async (req,res)=>{
    const {id} = req.params

    try {
        const comment = await Comment.destroy({ 
            where: {
                id
            }
        })

        res.json({
            result:comment
        })
    } catch (e) {
        res.status(500).json({
            result:null
        })
    }
})


module.exports = router