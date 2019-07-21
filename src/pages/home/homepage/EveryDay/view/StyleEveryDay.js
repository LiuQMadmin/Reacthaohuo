import styled from "styled-components"

const StyleEveryDay=styled.div`
   height:1.82rem;
   width:100%;
   display:flex;
   align-items:center;
   padding:0 .08rem;
   border-bottom:.1rem solid #eee;
   /* background:#EFEFEF; */
   .swiper-container{
       width:100%;
       .swiper-wrapper{
           height:1.65rem;
           width:max-content;
           display:flex;
           overflow:scroll;
           .swiper-slide{
               width:1.17rem;
               height:100%;
               display:flex;
               flex-direction:column;
               align-items:center;
               padding-top:.1rem;
               border-radius:.1rem;
               margin-right:.05rem; 
               background:#fff;
               box-shadow:#eee -1px 0px 18px;
               img{
                   width:.9056rem;
                   height:.9056rem;
                   border-radius:.15rem;
               }
               .imgname{
                   padding: .05rem 0;
                }
               
               del {
                 text-decoration: line-through;
                 color:#bbb;
                }
                .pricename{
                    span{
                    color:#FC4D52;
                    font-size:.168rem;
                    }
                    i{
                        font-size:.12rem;
                        color:#FC4D52;
                    }
                }
            }
       }
   }
`
export default StyleEveryDay