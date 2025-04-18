// Big-O=O(n)
function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
     return true
} }

// Big-O=O(logn)
function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
     return true
} }
  

console.log(isPrime(5))
console.log(isPrime(4))