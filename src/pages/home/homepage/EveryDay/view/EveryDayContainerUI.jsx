import React, { Component } from 'react';
import StyleEveryDay from "./StyleEveryDay"
class EveryDayContainerUI extends Component {
    render() {
        return (
           <StyleEveryDay>
            <div className="swiper-container" id="EverySwiper">
                <ul className="swiper-wrapper">
                  {
                        this.props.list.list&&this.props.list.list.map(value=>(
                            <li className="swiper-slide" key={value.id}>
                                <img src={value.pic} alt=""/>
                                <div className="imgname"><span>{value.dtitle.slice(0,6)+"..."}</span></div>
                                <div className="pricename">
                                <i>¥</i>
                                <span>{(parseInt(value.originPrice*10)-parseInt(value.couponPrice*10))/10}</span>&nbsp;
                                <del>¥{value.originPrice}</del>
                                </div>
                            </li>
                         ))
                    }
                </ul>
            </div>
           </StyleEveryDay>
        )
    }
}
export default EveryDayContainerUI