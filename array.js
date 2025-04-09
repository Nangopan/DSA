// let arr=[6,5,4,3,2,1]
// let max=arr[0]
// let min=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log(max,min)

// console.log(arr.reduce((acc,curr)=>{ return ans=acc+curr},10))

// let left=0
// let right=arr.length-1
// let temp=0
// while(left<=right){
//     temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp
//     left++
//     right--
// }
// console.log(arr)


// for(let i=0;i<arr.length/2;i++){
//     [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
// }
// console.log(arr)

// function isSorted(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             return false
//         }
        
//     }return true
// }
// console.log(isSorted(arr))
    

// let arr=[1,2,4,5]

// let total=(5*6)/2
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// let res=total-sum
// console.log(res)


// let arr=[0,1,2,3,0,0,8,9,10]
// let index=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//        arr[index]=arr[i]
//        index++
//     }    
// }
// while(index<arr.length){
//     arr[index]=0
//     index++
// }
// console.log(arr)

// let arr = [-2,1,-3,4,5,-1,2]

// let curr=0
// let max=arr[0]

// for(let i=0;i<arr.length;i++){
//     curr+=arr[i]
//     if(curr>max){
//         max=curr
//     }
//     if(curr<0){
//         curr=0
//     }
// }

// Rotate an  array
// let k=2
// function leftRotate(arr,k){
//  let n=arr.length
//  k=k%n
//  return arr.slice(n-k).concat(arr.slice(0,n-k))
// }

// function rightRotate(arr,k){
//     let n=arr.length
//     k=k%n
//     return arr.slice(k).concat(arr.slice(0,k))
//     // return arr.slice(0,n-k).concat(arr.slice(n-k))

//    }
// let arr=[1,2,3,4,5]
// console.log(rightRotate(arr,k))

// dutch flag sort
// function sorted(arr){
//     let start=0
//     let mid=0
//     let end=arr.length-1
//     while(mid<=end){
//         if(arr[mid]===0){
//             [arr[mid],arr[start]]=[arr[start],arr[mid]]
//             start++
//             mid++
//         }else if(arr[mid]===1){
//             mid++
//         }else{
//             [arr[mid],arr[end]]=[arr[end],arr[mid]]
//             end--
//         }
//     } return arr
// }
// console.log(sorted([1,0,2,1,2,0,0]))


// let arr1 = [1, 3, 5, 15,];
// let arr2 = [2, 4, 6, 8,11,14];

// let i=0;
// let j=0;
// let merged=[]

// while(i<arr1.length&&j<arr2.length){
// if(arr1[i]>arr2[j]){
// merged.push(arr2[j])
// j++
// }else{
//     merged.push(arr1[i])
//     i++
// }
// }
// while(i<arr1.length){
//     merged.push(arr1[i])
//     i++
// }
// while(j<arr2.length){
//     merged.push(arr2[j])
//     j++
// }
// console.log(merged)

// let arr=[1,2,5,8,7,10]
// let tar=21
// function sub(arr,tar){
//     let start=0;
//     let end=0
//     let sub=0
//     for(let i=0;i<arr.length;i++){
//         sub+=arr[i]
//         while(sub>tar){
//             sub-=arr[start]
//             start++
//         }
//         if(sub===tar){
//             return true
//         }
//     }
//     return false
   
// }
// console.log(sub(arr,tar))