/*
 * @Author: guangwei.bao 
 * @Date: 2018-09-25 16:48:13 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2018-09-25 19:23:58
 * @Describe: 接口场景处理(对工程接口的统一封装并暴露)
 */
'use strict';
import 'isomorphic-fetch';

// 对象类型转换
function parseJSON(response) {
	// return response.json();
	return response.json();
}

// 接口异常状态处理
function checkStatus(response) {
	// 正常状态
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

function obj(params) {}

// 接口场景处理
export function request(url, params, method = 'GET') {
	debugger;
	let _url = '';
	if (method.toUpperCase() === 'GET') {
        // for item in params{

        // }
	}
	_url = url + _url;
	return fetch(_url, {
		method: method.toUpperCase(),
		credentials: 'include',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache'
		},
		body: method.toUpperCase() === 'POST' ? JSON.stringify(params) : null
	})
		.then(checkStatus)
		.then(parseJSON);
}

// fetch(url,{ // url: 请求地址
//     method: "GET", // 请求的方法POST/GET等
//     headers : { // 请求头（可以是Headers对象，也可是JSON对象）
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: , // 请求发送的数据 blob、BufferSource、FormData、URLSearchParams（get或head方法中不能包含body）
//     cache : 'default', // 是否缓存这个请求
//     credentials : 'same-origin', //要不要携带 cookie 默认不携带 omit、same-origin 或者 include
//     mode : "",
//     /*
//         mode,给请求定义一个模式确保请求有效
//         same-origin:只在请求同域中资源时成功，其他请求将被拒绝（同源策略）
//         cors : 允许请求同域及返回CORS响应头的域中的资源，通常用作跨域请求来从第三方提供的API获取数据
//         cors-with-forced-preflight:在发出实际请求前执行preflight检查
//         no-cors : 目前不起作用（默认）

//     */
// }).then(resp => {
//     /*
//         Response 实现了 Body, 可以使用 Body 的 属性和方法:

//         resp.type // 包含Response的类型 (例如, basic, cors).

//         resp.url // 包含Response的URL.

//         resp.status // 状态码

//         resp.ok // 表示 Response 的成功还是失败

//         resp.headers // 包含此Response所关联的 Headers 对象 可以使用

//         resp.clone() // 创建一个Response对象的克隆

//         resp.arrayBuffer() // 返回一个被解析为 ArrayBuffer 格式的promise对象

//         resp.blob() // 返回一个被解析为 Blob 格式的promise对象

//         resp.formData() // 返回一个被解析为 FormData 格式的promise对象

//         resp.json() // 返回一个被解析为 Json 格式的promise对象

//         resp.text() // 返回一个被解析为 Text 格式的promise对象
//     */
//     if(resp.status === 200) return resp.json();
//     // 注： 这里的 resp.json() 返回值不是 js对象，通过 then 后才会得到 js 对象
//     throw New Error ('false of json');
// }).then(json => {
//     console.log(json);
// }).catch(error => {
//     consolr.log(error);
// })
