import React, { PureComponent } from 'react';
import style from './style.scss';

class SpeedyModule extends PureComponent {
    render() {
        return (
            <div className={style.speedyWrap}>快捷入口模块</div>
        )
    }
}

export default SpeedyModule;