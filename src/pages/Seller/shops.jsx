import React, { PureComponent } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SHOP_TAB_PAGE } from './store/actionTypes';
import asyncComponent from '../../components/AsyncComponent';

const routes = [{
    path: 'shops',
    breadcrumbName: '店铺列表'
}, {
    path: '',
    breadcrumbName: '新增店铺'
}]

class Shops extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            b: 45
        }
    }

    render() {
        const ShopsList = asyncComponent(() => import('../../components/Seller/shopsList'))
        const ShopsForm = asyncComponent(() => import('../../components/Seller/shopsForm'))
        const itemRender = (route, params, routes, paths) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
        }
        return (
            <div>
                <Breadcrumb separator="/" itemRender={itemRender} routes={routes} />
                <ShopsList></ShopsList>
                <ShopsForm></ShopsForm>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        change() {
            dispatch({
                type: SHOP_TAB_PAGE,
                bool: true
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shops);