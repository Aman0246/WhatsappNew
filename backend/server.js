const express=require('express')
const app=express()
const {routes}=require('./routes/routes')
require('dotenv').config()

app.use('/',routes)

app.listen(process.env.PORT,()=>{
    console.log(`surver Running at ${process.env.PORT}`)
})