import React, { Component } from 'react';
import NavUI from "./NavUI"
import Swiper from "swiper"
class Nav extends Component {
    render() {
        return (
            <NavUI></NavUI>
        )
    }

    componentDidMount(){
        new Swiper("#swiper-container",{
            slidesPerView :"auto",
        })
    }





}
export default Nav