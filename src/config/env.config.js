/**
 * 项目环境接口配置http://rap.ywwl.com:8080/mockjsdata/65
 */
const isMock = true;
let devUrl = isMock ? 'http://rap.ywwl.com:8080/mockjsdata/68' : '//192.168.201.3:8028';
const config = {
    development: {
        url: devUrl
    }
}

module.exports = {
    CONFIG: config,
    isMock, // 入口开发环境是否走mock
}
