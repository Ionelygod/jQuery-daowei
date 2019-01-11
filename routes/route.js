/**
 * Created by Fairy on 2019/1/8.
 */
const express = require('express')

const router = express.Router()

const index = require('../mock/index.json')
const service = require('../mock/service.json')
const item = require('../mock/item.json')
const comments = require('../mock/comments.json')

router.get('/msite',(req,res)=>{
  res.set()
  res.send(index)
})
router.get('/service',(req,res)=>{
  res.send(service)
})
router.get('/item',(req,res)=>{
  res.send(item)
})
router.get('/comments',(req,res)=>{
  res.send(comments)
})
module.exports = router
