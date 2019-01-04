import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import style from './style.scss';
import ActivityModule from '../../components/Home/activity';
import SpeedyModule from '../../components/Home/speedy';
import UserModule from '../../components/Home/user';

class Home extends PureComponent {

    render() {
        return (
            <div className={style.homeWrap}>
                <div className={style.carouselWrap}>
                    <Carousel autoplay>
                        <div className={style.slickSlide}><h3>1</h3></div>
                        <div className={style.slickSlide}><h3>2</h3></div>
                        <div className={style.slickSlide}><h3>3</h3></div>
                        <div className={style.slickSlide}><h3>4</h3></div>
                    </Carousel>
                </div>
                <UserModule></UserModule>
                <SpeedyModule></SpeedyModule>
                <ActivityModule></ActivityModule>
            </div>
        )
    }

}

export default Home;