import React, { Component } from 'react';
import StyleMain from "./StyleMain"
import {SwiperContainer} from "../../swiper/"
import {ChartContainer} from "../../DynamicChart/"
import IconContainer from "../../IconNavigation/"
import {EveryDayContainer} from "../../EveryDay/"
import {ListContainer} from "../../List/"
class MainContainerUI extends Component {
    render() {
        return (
          <StyleMain>
           <div id="container"> 
                <div className="container-one">
                <SwiperContainer></SwiperContainer>
                <ChartContainer></ChartContainer>
                <IconContainer></IconContainer>
                <EveryDayContainer></EveryDayContainer>
                <ListContainer></ListContainer>
                </div>
            </div> 
          </StyleMain>
        )
    }
}
export default MainContainerUI