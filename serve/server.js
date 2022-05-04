const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500 
const { sequelize } = require('./models')

// router
const userRouter = require('./routes/user')
const commentRouter = require('./routes/comment')

app.use(express.json())

sequelize.sync({ force: false })
.then( ()=>{
    console.log('Connect')
} )
.catch( ()=>{
    console.log(' Disconect ')
} )

app.use('/user',userRouter)
app.use('/comment',commentRouter)

app.listen(PORT,()=>{
    console.log('server start')
})