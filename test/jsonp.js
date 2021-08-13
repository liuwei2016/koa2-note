const Koa = require('koa')
const jsonp = require('koa-jsonp')
const app = new Koa()
// 使用中间件  
app.use(jsonp())
app.use( async ( ctx ) => {
  let returnData = {
    success: true,
    data: {
      text: 'this is a jsonp api',
      time: new Date().getTime(),
    }
  }
  // 直接输出JSON支持jsonp
  ctx.body = returnData
})


app.listen(3003, () => {
  console.log('[demo] jsonp is starting at port 3003')
})

