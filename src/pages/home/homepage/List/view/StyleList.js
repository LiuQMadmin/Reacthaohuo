import styled from "styled-components"

const StyleList =styled.ul`
    width:100%;
    li{
        width:100%;
        height:1.33rem;
        display:flex;
        padding-left:.1rem;
        align-items:center;
        border-bottom:.01rem solid #eee;
        .imgname{
            img{
                width:1.12rem;
                height:1.12rem;
            }
        }
        .detail{
            flex:1;
            height:1.12rem;
           
            .detail-one{
                height:.7rem;
                width:100%;
                padding:0 .13rem;
                .yo-ico{
                    color:#FC4D52;
                }
            }
            .detail-two{
                height:.18rem;
                width:100%;
               
                display:flex;
                font-size:.12rem;
                padding:0 .13rem;
                color:#AAA;
                .detail-two-one{
                    flex:1;
                }
                .col-red{
                    color:#FC4D52;
                }
            }
            .detail-there{
                height:.24rem;
                width:100%;
               
                padding:0 .13rem;
                font-size:.12rem;
                line-height:.24rem;
                color:#FC4D52;
                del{
                    
                    font-size:.184rem;
                }
            }
        }
    }
`
export default StyleList