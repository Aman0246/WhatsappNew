const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {routes}=require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("mongoose is connected...."))
.catch((e)=>{console.log("mongose is not connected")})

app.use(cors())
app.use(express.json())
app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`surver Running at ${process.env.PORT}`)
})