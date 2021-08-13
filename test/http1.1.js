// http2服务端代码
 
const fs = require('fs')
const path = require('path')
const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();
// 配置静态web服务的中间件
app.use(static(path.join( __dirname, './static')));
 
app.use(ctx => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream('./static/index1.html');
})
 
 
app.listen(3005, (err) => {
  console.log(`http Server listening on 3005`)
})