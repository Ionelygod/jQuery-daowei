/**
 * Created by Fairy on 2019/1/8.
 */
const express = require('express')
const cors = require('cors')
const router = require('./routes/route')
const app = express()

app.use(express.static("dist"));
app.use(router)
app.use(cors())
app.listen(3000,()=>{
  console.log('服务器开启成功，请查看localhost://3000');
})

