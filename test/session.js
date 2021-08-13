const Koa = require('koa')
const app = new Koa()
// const static = require('koa-static'); 
// const path = require('path')
const session = require('koa-session');
// app.use(static(
//     path.join( __dirname,  'public')
// )) 


app.keys = ['some secret hurr'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly:false, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));

app.use( async ( ctx ) => {
    console.log('ctx.session.username',ctx.session)
    if ( ctx.url === '/' && ctx.method === 'GET' ) {
      // 当GET请求时候返回表单页面
      let html = `
        <h1>koa2 session demo</h1>
      `
      ctx.session.username = "张三";
      ctx.body = html
    }
})

app.listen(3003, () => {
    console.log('[demo] request post is starting at port 3003')
  })
  