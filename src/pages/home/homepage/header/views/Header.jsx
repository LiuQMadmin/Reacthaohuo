import React, { Component } from 'react';
import {Styleheader} from "./Styleheader"
class Header extends Component {
    render() {
        return (
           <Styleheader>
            <div>
            <span className="yo-ico search">&#xe66c;</span>&nbsp;
            <i>输入商品名或粘贴宝贝标题搜索</i>
            </div>
            <div>
                <span className="yo-ico">
                &#xe638;
                </span>
            </div>  
          </Styleheader>
        )
    }
}
export default Header