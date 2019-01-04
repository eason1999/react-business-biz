import React, { PureComponent } from 'react';

class shopsForm extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            b: 4555,
            routes: [{
                path: 'shops',
                breadcrumbName: '店铺列表'
            }, {
                path: '',
                breadcrumbName: '新增店铺'
            }]
        }
        console.log(this.state)
    }

    componentDidMount() {
        console.log(this.state, 658767)
    }

    render() {
        return (
            <div>
                <div>我是标题2</div>
            </div>
        )
    }
}

export default shopsForm;