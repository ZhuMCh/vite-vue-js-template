import axios from 'axios';

// 创建请求实例
const instance = axios.create({
	baseURL: '/api',
	// 请求超时毫秒数
	timeout: 5000,
	// 表示跨域请求时是否需要凭证
	withCredentials: false,
});

// 前置请求拦截器
instance.interceptors.request.use(
	(config) => {
		/**
		 * 配置请求头参数
		 * const token = getToken()
		 * if(token){
		 *  config.headers.token=token
		 * }
		 */
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 后置拦截器
instance.interceptors.response.use(
	(response) => {
		/**
		 * 根据实际情况对响应数据做处理
		 */
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
