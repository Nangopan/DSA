function duplicates(arr){
    let uniq=new Set()
    let duplicate=new Set()
    let freq={}
    for( let i=0;i<arr.length;i++ ){
        freq[arr[i]]=(freq[arr[i]]||0)+1
        if(uniq.has(arr[i])){
            duplicate.add(arr[i])
        }else{
            
                uniq.add(arr[i])
            
           
        }
        
    }
    return {unique:[...uniq],duplicates:[...duplicate],freq}
}


console.log(duplicates([1,2,2,3,4,4,5,6,7,7,9]))