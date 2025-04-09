// function reverse(str){
// let res=""
// for(let i=str.length-1;i>=0;i--){
//     res+=str[i]
// }
// return res
// }
// let str="bye"
// console.log(reverse(str))


// function palindrome(str){
//     let res=str.split("").reverse().join("")
//     console.log(res)
//     if(res===str){
//         return true
//     }else{
//         return false
//     }
// }
// let val="malayalam"
// console.log(palindrome(val))


// function vowCons(str){
//     let vowels="AEIOUaeiou"
//     let vow=0
//     let con=0
//     for(let i=0;i<str.length;i++){
//         let ch=str[i]
//         if(ch>="a"&&ch<="z" ||ch>="A" && ch<="Z"){
//             if(vowels.includes(ch)){
//                 vow++
//             }else{
//                 con++
//             }
//         }
//     }
//     return `vowels:${vow}, constants:${con}`
// }
// console.log(vowCons("Helloo friend"))

function s