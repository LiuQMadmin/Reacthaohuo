import React, { Component } from 'react';
import MainContainerUI from "./MainContainerUI"
import BSscoll from "better-scroll"




class MainContainer extends Component {
    render() {
        return (
           <MainContainerUI>
           </MainContainerUI>
        )
    }
    componentDidMount(){
        let bscroll=new BSscoll("#container",{})
    }
}
export default MainContainer