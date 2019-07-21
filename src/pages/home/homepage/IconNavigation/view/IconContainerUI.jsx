import React, { Component } from 'react';
import StyleIcon from "./StyleIcon"
class IconContainerUI extends Component {
    render() {
        return (
           <StyleIcon> 
               <ul>
                   <li>
                       <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01s4bCD22JJhxN8pEpi_!!2053469401.png" alt=""/>
                       <span>9.9包邮</span>
                   </li>
                   <li>
                       <img src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN013HamuH2JJhxN8QOlW_!!2053469401.gif" alt=""/>
                       <span>疯抢排行</span>
                   </li>
                   <li>
                        <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN011U0OZt2JJhxDih0xv_!!2053469401.png" alt=""/>
                        <span>咚咚抢</span>
                   </li>
                   <li>
                        <img src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01kWR3C62JJhxJYF7om_!!2053469401.png" alt=""/>
                        <span>编辑精选</span>
                   </li>
                </ul>   
            </StyleIcon>
        )
    }
}
export default IconContainerUI