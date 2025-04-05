// O(2^n)
function fib(n){
    if(n<2){
        return n
    }
    return fib(n)=fin(n-1)+fib(n-2)
}
console.log(fib(7))