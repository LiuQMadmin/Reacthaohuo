
const syncloadData=list=>({
    type:"Every",
    list
})

const asyncloadData=()=>{
    return (dispatch)=>{
        fetch("/api/category/product/model-detail-by-model-id?entityId=4&modelId=16&source=3&userId=23439")
        .then(response=>response.json())
        .then(result=>{
            dispatch(syncloadData(result.data.config))
        })
    }
}
export{
    asyncloadData,
    syncloadData
}