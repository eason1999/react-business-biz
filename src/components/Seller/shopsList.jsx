import React, { PureComponent } from 'react';
import { Button, Table } from 'antd';
import style from './style.scss';

const columns = [{
    title: '店铺类型',
    dataIndex: 'type',
    key: 'type'
}, {
    title: '店铺名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '店铺旺旺',
    dataIndex: 'wangwang',
    key: 'wangwang',
}, {
    title: '店铺首页网址',
    key: 'address',
    dataIndex: 'address'
}, {
    title: '主营业务',
    key: 'main',
    dataIndex: 'main'
}, {
    title: '联系人',
    key: 'connect',
    dataIndex: 'connect'
}, {
    title: '手机号',
    key: 'phone',
    dataIndex: 'phone'
}, {
    title: 'QQ号',
    key: 'qq',
    dataIndex: 'qq'
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
        <a href="javascript:;">编辑</a>
        </span>
    ),
}]

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    main: 'nice',
    connect: 'John Brown',
    phone: 32,
    wangwang: 'New York No. 1 Lake Park',
    qq: 'nice',
}, {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    main: 'nice',
    connect: 'John Brown',
    phone: 32,
    wangwang: 'New York No. 1 Lake Park',
    qq: 'nice',
}, {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    main: 'nice',
    connect: 'John Brown',
    phone: 32,
    wangwang: 'New York No. 1 Lake Park',
    qq: 'nice',
}]

class shopsList extends PureComponent {
    
    render() {
        return (
            <div>
                <Button type="primary" className={style.btn}>添加店铺</Button>
                <Table className={style.tableWrap} columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default shopsList;