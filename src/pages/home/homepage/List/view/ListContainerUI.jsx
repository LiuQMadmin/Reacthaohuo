import React, { Component } from 'react';
import StyleList from "./StyleList"
class ListContainerUI extends Component {
    render() {
        return (
           <StyleList>
               {
                   this.props.list&&this.props.list.map(value=>(
                        <li key={value.id}>
                            <div className="imgname">
                                <img src={value.pic} alt=""/>
                            </div>
                            <div className="detail">
                                <div className="detail-one">
                                    {value.tmall===1 ? <span className="yo-ico">&#xe604;</span> : <span className="yo-ico">&#xe626;</span>}
                                    &nbsp;{value.dtitle}
                                </div>
                                <div className="detail-two">
                                <span className="detail-two-one">天猫价 ¥{value.yuanjia}</span>
                                <span>已售<b className="col-red">{parseInt(value.xiaoliang/1000)/10}</b>件</span>
                                </div>
                                <div className="detail-there">
                                    <span className="fr">券后价 &nbsp;
                                    <i>¥</i>
                                    <del>{(parseInt(value.yuanjia*10)-parseInt(value.quanJine*10))/10}</del>
                                    </span>
                                </div>
                            </div>
                        </li>
                   ))
               }
                   
            </StyleList>
        )
    }
}
export default ListContainerUI