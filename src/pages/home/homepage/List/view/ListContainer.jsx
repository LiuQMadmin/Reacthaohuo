import React, { Component } from 'react';
import ListContainerUI from "./ListContainerUI"
import { connect } from 'react-redux';
import asyncloadData from "../actionCreate"
const mapState=state=>({
    list:state.ListReducer.list,
})
const mapDispatch=(dispatch)=>({
    loadData(){
        dispatch(asyncloadData())
   }
})
class ListContainer extends Component {
    render() {
        console.log(this.props.list)
        return (
         <ListContainerUI {...this.props}></ListContainerUI>
        )
    }
    componentDidMount(){
        this.props.loadData()
    }
}
export default connect(mapState,mapDispatch)(ListContainer)