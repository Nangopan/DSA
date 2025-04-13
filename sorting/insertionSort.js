function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let numToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numToInsert
    }
    return arr
}
console.log(insertion([0,1,25,30,10,5,8]))