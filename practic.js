// function linear(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             return i
//         }
//     }
//     return -1
// }

// function binary(arr,tar,left,right){
//     while(left<right){
//         let middleIndex=Math.floor((left+right)/2)
//         if(tar===arr[middleIndex]){
//             return middleIndex
//         }
//          if(tar>arr[middleIndex]){
//             binary
//         }else{
//             right=middleIndex-1
//         }
//     }
// }

// function fac(n){
//     let res=1
//     for(let i=2;i<=n;i++){
//         res=res*i
//     }
//     return res
// }

// function fac(n){
//     if(n===0){
//         return 1
//     }else{
//         return n*fac(n-1)
//     }
// }


// function fib(n){
//     let fib=[0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// function fib(n){
// if(n<2){
//     return n
// }else{
//     return fib(n-1)+fib(n-2)
// }
// }

function recBinary(arr,tar){
    return search(arr,tar,0,arr.length)
}
function search(arr,tar,left,right){
    if(left>right){
        return -1
    }
    let middleIndex=Math.floor((left+right)/2)
    if(tar===arr[middleIndex]){
        return middleIndex
    }
    if(tar>arr[middleIndex]){
        return search(arr,tar,middleIndex+1,right)
    }if(tar<arr[middleIndex]){
        return search(arr,tar,left,middleIndex-1)
    }
}


console.log(recBinary([1,2,3,4,5],5))