const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', function (ctx, next) {

	/*
maxAge              一个数字表示从 Date.now() 得到的毫秒数
expires cookie      过期的 Date
path cookie         路径, 默认是'/'
domain cookie       域名
secure             安全 cookie   默认false，设置成true表示只有 https可以访问
httpOnly           是否只是服务器可访问 cookie, 默认是 true
overwrite          一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。
	*/
	ctx.cookies.set("auth", "123", {
		httpOnly: false,
		path:'/aa',
		secure:false ,
		overwrite:true,
		domainCookie: 'localhost',
		maxAge:1000*60*60*24,
	})
	ctx.body = "Hello koa";
})
router.get('/newscontent', (ctx, next) => {

	let url = ctx.url;
	//从request中获取GET请求
	let request = ctx.request;
	let req_query = request.query;
	let req_querystring = request.querystring;
	//从上下文中直接获取
	let ctx_query = ctx.query;
	let ctx_querystring = ctx.querystring;
	ctx.body = {
		url,
		req_query,
		req_querystring,
		ctx_query,
		ctx_querystring
	}

});
router.get('/product/:id', async (ctx) => {
	console.log(ctx.params); //{ id: '123' }  //获取动态路由的数据
	ctx.body = '这是商品页面-' + ctx.params.id;
})
app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑
app.listen(3003, () => {
	console.log('starting at port 3003');
});