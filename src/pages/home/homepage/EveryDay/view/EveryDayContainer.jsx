import React, { Component } from 'react';
import EveryDayContainerUI from "./EveryDayContainerUI"
import Swiper from "swiper"
import { connect } from 'react-redux';
import {asyncloadData} from "../actionCreate"
const mapState=state=>({
    list:state.EveryReducer.list
})
const mapDispatch=(dispatch)=>({
     loadData(){
         dispatch(asyncloadData())
    }
})


class EveryDayContainer extends Component {
    render() {
        return (
           <EveryDayContainerUI {...this.props}>        
            </EveryDayContainerUI>
        )
    }
    componentDidMount(){
        this.props.loadData()
        setTimeout(()=>{
            new Swiper("#EverySwiper",{
                slidesPerView :"auto",
            })
        },500)
    }
}
export default connect(mapState,mapDispatch)(EveryDayContainer)