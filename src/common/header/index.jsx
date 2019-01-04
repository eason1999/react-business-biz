import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import style from './style.scss';


const handleClick = () => {
    console.log(23424)
}

const menu = (
    <Menu onClick={handleClick}>
        <Menu.Item>退出</Menu.Item>
    </Menu>
)

class Header extends PureComponent {
    render() {
        return <div className={style.headerWrap}>
            <div className={style.leftHeader}>
                <div className={style.logoWrap}>
                    <img className={style.logo} src={require("../../static/img/icon-y-logo-300.jpg")} alt="" />
                    <span className={style.plateformName}>小Y商家</span>
                </div>
                <ul className={style.list}>
                    <Link to="/home">
                    <li>商户管理中心</li>
                    </Link>
                    <Link to="/">
                    <li>帮助中心</li>
                    </Link>
                </ul>
            </div>
            <div className={style.rightHeader}>
                <span>欢迎，</span>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <a>游客 <Icon type="down" /></a>
                </Dropdown>
            </div>
          </div>;
    }

    handleChange() {
        console.log('退出了')
    }
}

export default Header;