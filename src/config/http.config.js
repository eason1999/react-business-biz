import axios from 'axios';
import {
    message
} from 'antd';
import envConfig from '../config/env.config';

let isMock = envConfig.isMock;

axios.defaults.baseURL = envConfig.CONFIG[process.env.NODE_ENV].url;
axios.defaults.timeout = 10000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (!isMock) {
        let token = null;
        config.headers.common['X-TOKEN'] = token;
    }
    config.cache = false;
    config.params = config.params || {};
    // 约定配置、公共参数
    const commonParams = {
        source: ''
    }
    Object.assign(config.params, commonParams);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (isMock) {
        return response.data.data;
    }
    if (response.status === 200 && response.data.code === 1) {
        return response.data.data;
    }
    message.error(response.data.msg);
    if (response.data.code === -1) {
        return Promise.reject(response.data.msg);
    }
    return Promise.reject(response.data.msg);
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios;