const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const mongoose = require('mongoose')


dotenv.config()
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})


const port = process.env.PORT || 3000
app.use('/api/v1/job', userRouter)


mongoose.connect(process.env.MONGO_URI, 
    ()=>{console.log('database is connected')})

app.listen(port, ()=>{console.log(`server is running on http:\\localhost:${port}`)})