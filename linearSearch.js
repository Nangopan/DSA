// O(n)
function search(arr,target){
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        return i
    }
}
return -1
}
console.log(search([1,5,6,10,9],9))