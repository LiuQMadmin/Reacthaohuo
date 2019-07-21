import React, { Component } from 'react';
// import Header from "./header/Header"
import {Header} from "./header/"
import {Homepage as Home} from "./StyleHomepage"
import {Nav} from "./nav/"
import {MainContainer} from "./Main/"
class Homepage extends Component {
    render() {
        return (
            <Home>
                <Header></Header>
                <Nav></Nav>
                <MainContainer></MainContainer>
            </Home>
        )
    }
}
export default Homepage