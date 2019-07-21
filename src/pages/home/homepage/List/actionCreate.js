const syncloadData=list=>({
    type:"List",
    list
})

const asyncloadData=()=>{
    return (dispatch)=>{
        fetch("/api/category/index/lingquan-live?pageSize=20&pageId=1&entityId=4&userId=23439")
        .then(response=>response.json())
        .then(result=>{
            dispatch(syncloadData(result.data.list))
        })
    }
}
export default asyncloadData