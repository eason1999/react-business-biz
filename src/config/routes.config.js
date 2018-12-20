const ROUTES = [
    {
        key: 'Home',
        link: '/home',
        iconType: 'home',
        text: '商家首页'
    }, {
        subMenu: 'ShopManage',
        key: 'ShopManage',
        text: '商家',
        iconType: 'icon-dianpu2',
        routes: [{
            key: 'Shops',
            link: '/shops',
            iconType: 'profile',
            text: '店铺列表'
        }, {
            key: 'Goods',
            link: '/goods',
            iconType: 'profile',
            text: '商品列表'
        }, {
            key: 'Capital',
            link: '/capital',
            iconType: 'profile',
            text: '资金明细'
        }]
    }, {
        subMenu: 'ActivityManage',
        key: 'ActivityManage',
        text: '活动',
        iconType: 'icon-huodong1',
        routes: [
            {
                key: 'ActivityList',
                link: '/activitylist',
                iconType: 'profile',
                text: '活动列表'
            }, {
                key: 'Order',
                link: '/order',
                iconType: 'profile',
                text: '订单管理'
            }, {
                key: 'Check',
                link: '/check',
                iconType: 'profile',
                text: '审核管理'
            }
        ]
    }, {
        subMenu: 'CapitalManage',
        key: 'CapitalManage',
        text: '资金管理',
        iconType: 'icon-jinbi',
        routes: [
            {
                key: 'Binding',
                link: '/binding',
                iconType: 'profile',
                text: '绑定支付宝'
            }, {
                key: 'Deposit',
                link: '/deposit',
                iconType: 'profile',
                text: '保证金明细'
            }, {
                key: 'Payment',
                link: '/payment',
                iconType: 'profile',
                text: 'VIP缴费'
            }, {
                key: 'Recharge',
                link: '/recharge',
                iconType: 'profile',
                text: '充值'
            }, {
                key: 'Withdraw',
                link: '/withdraw',
                iconType: 'profile',
                text: '提现'
            }
        ]
    }
];

export { ROUTES };