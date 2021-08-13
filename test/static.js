const Koa = require('koa')
const app = new Koa()
const static = require('koa-static'); 
const path = require('path')

app.use(static(
    path.join( __dirname,  'public')
)) 
app.listen(3003, () => {
    console.log('[demo] request post is starting at port 3003')
  })
  