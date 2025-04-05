// O(logn)
function binary(arr,target){
    let left=0;
    let right=arr.length
    while(left<right){
        let middleIndex=Math.floor((left+right)/2)
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target>arr[middleIndex]){
            left=middleIndex+1
        }else{
            right=middleIndex-1
        }
    }
}
console.log(binary([-5,2,4,6,10],10))