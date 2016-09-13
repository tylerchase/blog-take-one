'use strict'

const express = require('express')
let router = express.Router();
const pg = require('../db/knex_config.js')

router.post('/v1/items',(req, res, next) => {
  console.log(pg)

  pg('users').insert(req.body)
  .then(() =>{
    res.redirect('/')
  })
  //  pg('users').insert({
  //    username: "My forth user",
  //    password: "fdsa",
  //    email: "yaho@fdsagfda.com",
  //    created_at: null,
  //    updated_at: null,
  //  })
  // .then((something)=>{
  //   console.log(something);
  //   res.redirect('/')
  // })
  .catch((err)=>{
    console.log('there was an error')
    next(err)
  })
});
module.exports = router
