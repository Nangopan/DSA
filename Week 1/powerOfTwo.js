
// Big-O=O(n)

function powerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}

// Big-O=O(logn)
function powerOfTwo(n){
    if(n<1){
        return false
    }
    return (n&(n-1))==0
}
console.log(powerOfTwo(5))
console.log(powerOfTwo(8))