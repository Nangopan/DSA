function duplicates(arr){
    let freq={}
    let duplicate=[]
    for(let i=0;i<arr.length;i++){
        let val=arr[i]
        if(freq[val]===1){
            duplicate.push(arr[i])
        }
        freq[val]=(freq[val]||0)+1
    }
    return duplicate
}
let arr=[1,2,3,4,5,2,3,5,9,1]
console.log(duplicates(arr))