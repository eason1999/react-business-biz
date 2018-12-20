import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import style from './style.scss';
import { ROUTES } from '../../config/routes.config.js';

const menuRoutes = _.clone(ROUTES);

let rootKeys = [], handleRouteArr = []
menuRoutes.forEach(item => {
    if (item.subMenu) {
        rootKeys.push(item.subMenu)
        item.routes.forEach(path => {
            path.subMenu = item.subMenu
        })
        handleRouteArr.push(...item.routes)
    } else {
        handleRouteArr.push(item)
    }
})

const { SubMenu } = Menu;

// 在 iconfont.cn 上生成
const MenuIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_720317_ot2rdjzbqh.js',
});

class MainMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeKey: 'Home',
            openKeys: [],
            rootSubmenuKeys: rootKeys
        }
        this.menuOpenChange = this.menuOpenChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({
            activeKey: e.key
        })
    }

    componentDidMount() {
        let pathname = this.context.router.route.location.pathname;

        if (pathname === '/') {
            this.context.router.history.replace('/home')
        }

        pathname = pathname === '/' ? '/home' : pathname;
        let index = _.findIndex(handleRouteArr, route => route.link === pathname);
        // 页面地址错误
        if (index === -1) {
            this.setState({
                activeKey: ''
            })
            return false;
        }
        let currentOpenKeys = _.find(handleRouteArr, (item) => {
            return item.link === pathname
        })
        this.setState({
            activeKey: handleRouteArr[index]['key'],
            openKeys: currentOpenKeys.subMenu ? [currentOpenKeys.subMenu] : []
        });
    }

    render() {
        let menuHtml = menuRoutes.map(item => {
            if (item.routes && item.routes.length) {
                return (
                    <SubMenu key={item.key} title={<span><MenuIcon type={item.iconType} /><span>{item.text}</span></span>}>
                        {
                            item.routes.map(route => {
                                return (
                                    <Menu.Item key={route.key} className={style.menuLi}>
                                        <Link to={route.link}>{route.text}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key} className={style.menuLi}>
                        <Link to={item.link}>
                            <Icon type="pie-chart" />
                            <span>{item.text}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
        return (
            <div className={style.menuWrap}>
                <Link to="/" className={style.quickBtn}>活动报名</Link>
                <Menu
                    openKeys={this.state.openKeys}
                    onOpenChange={this.menuOpenChange}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.activeKey]}
                    mode="inline"
                    style={{
                        border: 'none'
                    }}
                    >
                    {menuHtml}
                </Menu>
            </div>
        )
    }

    menuOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    }

}

MainMenu.contextTypes = {
    router: PropTypes.object
}

export  default MainMenu;