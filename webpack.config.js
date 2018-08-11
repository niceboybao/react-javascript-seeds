/**
 * Created by guangwei.bao
 * webpack打包配置脚本
 * 妈妈再也不用担心我不会webpack了 https://juejin.im/post/5a068c2b5188255851322b8c
 * 妈妈再也不用担心我不会webpack了2 https://juejin.im/post/5a17a9ef51882540f3633bff
*/

//整个webpack配置对象
var webpackConfig = {
	//入口
	entry: './src/index.js', // 这里是项目入口文件地址
	//出口
	ouput: {
		path: __dirname + '/www', // 这里是项目输出的路径,__dirname表示当前文件的位置
		filename: 'js/' + '[name].js' // 这里是生成文件的名称，可起你想要的名字
	}
};

module.exports = webpackConfig;
