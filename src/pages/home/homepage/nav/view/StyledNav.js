import styled from "styled-components"

const Stylednav=styled.div`
    width:100%;
    height:.4rem;
    display:flex;
    align-items:center;
    .jingxuan{
        width:.5rem;
        height:.4rem;
        display:flex;
        justify-content:center;
        align-items:center;
        .jingxuan-one{
            height:.38rem;
            width:.31rem;
            font-size:.154rem;
            border-bottom:.02rem solid #FC3F78;
            color:#FC3F78;
            line-height:.38rem;
            text-align:center;
        }
    }
    .biankuang{
        height:.25rem;
        border-left:.01rem solid #eee;
    }
    .swiper-container{
        height:100%;
        flex:1;
        overflow:auto;
        .swiper-wrapper{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            .swiper-slide{
                padding:0 .1rem;
                span{
                    white-space:nowrap;
                    font-size:.154rem;
                    color:#333;
                }
            }
        }
    }
    .xiangxia{
        width:.4rem;
        height:.4rem;
        text-align:center;
        line-height:.4rem;
        span{
            font-size:.16rem;
            color:#ccc;
        }
    }
`
export{
    Stylednav
}