import styled from "styled-components"
const Styleheader=styled.div`
    width:100%;
    height:.45rem;
    padding-left:.1rem;
    display:flex;
    align-items:center;
    background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    div:nth-child(1){
        width:calc(100% - .46rem);
        height:.3rem;
        background:#fff;
        border-radius:.25rem;
        padding-left:.1rem;
        line-height:.3rem
        span{
            font-size:.2rem;
            color:#bbb;
        }
        i{
            color:#bbb;
        }
    }
    div:nth-child(2){
        width:.46rem;
        height: .45rem;
        font-size:.3rem;
        color:#fff;
        text-align:center;
        line-height:.4rem;
    }
`
export {
    Styleheader
}