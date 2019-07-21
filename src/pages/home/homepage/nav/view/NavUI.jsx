import React, { Component } from 'react';
import {Stylednav} from "./StyledNav"
class NavUI extends Component {
    render() {
        return (
            <Stylednav>
            <div className="jingxuan">
                <div className="jingxuan-one">
                    精选
                </div>
            </div>
            <div className="biankuang"></div>
            <div className="swiper-container" id="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><span>女装</span></div>
                    <div className="swiper-slide"><span>美食</span></div>
                    <div className="swiper-slide"><span>男装</span></div>
                    <div className="swiper-slide"><span>美妆</span></div>
                    <div className="swiper-slide"><span>居家日用</span></div>
                    <div className="swiper-slide"><span>鞋品</span></div>
                    <div className="swiper-slide"><span>数码家电</span></div>
                    <div className="swiper-slide"><span>母婴</span></div>
                    <div className="swiper-slide"><span>内衣</span></div>
                    <div className="swiper-slide"><span>箱包</span></div>
                    <div className="swiper-slide"><span>配饰</span></div>
                    <div className="swiper-slide"><span>文艺车品</span></div>
                    <div className="swiper-slide"><span>家装家纺</span></div>
                    <div className="swiper-slide"><span>户外运动</span></div>
                </div>
            </div>
            <div className="xiangxia">
                <span className="yo-ico">
                &#xe605;
                </span>
            </div>
        </Stylednav>
        )
    }
}
export default NavUI