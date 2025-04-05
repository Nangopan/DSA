// O(n)-linear
function fac(n){
    let res
    if(n==0){
        return 1
    }
    else{
        res=fac(n)*fac(n-1)
        return res
    }
}
console.log(fac(5))