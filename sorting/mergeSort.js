function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,middle)
    let rightArr=arr.slice(middle)
    // console.log("iterations")
    // console.log("leftArr=>",leftArr,"rightArr=>",rightArr)
    // console.log(mergeSort(leftArr),mergeSort(rightArr))
    // console.log("------------------------------")
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
    let sorted=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
console.log(mergeSort([-6,10,-2,15]))