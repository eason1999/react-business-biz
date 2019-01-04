import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import style from './style.scss';
// import { homeActionTypes } from './store';
import { homeActionCreators } from './store';

class UserModule extends PureComponent {
    render() {
        let { userInfo, getUserInfo } = this.props;
        return (
            <div className={style.userWrap}>
                用户模块
                <div>{JSON.stringify(userInfo)}</div>
                <Button type="primary" onClick={getUserInfo}>发送请求</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.getIn(['homeComponent', 'userInfo'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo() {
            dispatch(homeActionCreators.getUserInfo())
            // dispatch({
            //     type: homeActionTypes.BEGIN_SEND_REQUEST
            // })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModule);