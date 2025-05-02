class Heap{
 constructor(){
    this.heap=[]
 }
 getParent(i){
    return Math.floor((i-1)/2)
 }
 getLeft(i){
    return Math.floor((i*2)+1)
 }
 getRight(i){
    return Math.floor((i*2)+2)
 }
 getParentValue(i){
    return this.heap[this.getParent(i)]
 }
 getLeftValue(i){
    return this.heap[this.getLeft(i)]
 }
 getRightValue(i){
    return this.heap[this.getRight(i)]
 }
 hasParent(i) {
    return this.getParent(i) >= 0; 
}
 hasLeft(i){
    return this.getLeft(i)<this.heap.length
 }
 hasRight(i){
    return this.getRight(i)<this.heap.length
 }
 swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
 }
 insert(value){
    this.heap.push(value)
    this.heapify()
 }
 heapify(){
    let i=this.heap.length-1
    while(this.hasParent(i) && this.getParentValue(i)<this.heap[i]){
        this.swap(this.getParent(i),i)
        i=this.getParent(i)
    }
 }
 remove(){
    let val=this.heap[0]
    this.heap[0]=this.heap[this.heap.length-1]
    this.heap.pop()
    this.heapifyDown()
    return  val
 }
 heapifyDown(){
    let i=0
    
    while(this.hasLeft(i)){
        let l=this.getLeft(i)
        if(this.hasRight(i) && this.getLeftValue(i)<this.getRightValue(i)){
            l=this.getRight(i)
        }
        if(this.heap[i]>this.heap[l]){
            break
        }else{
            this.swap(i,l)
        }
       i=l
    }
 }
 heapSort(arr){
    let maxHeap=new Heap()
    let sorted=[]
    for(let val of arr){
        maxHeap.insert(val)
    }
    while(maxHeap.heap.length){
        sorted.push(maxHeap.remove())
    }
    return sorted.reverse()
 }
 Kthsmallestval(arr,k){
  let heap=new Heap()
  for(let val of arr){
    heap.insert(val)
    if(heap.heap.length>k){
        heap.remove()
    }
  }
   return heap.peek()
 }
 peek(){
    return this.heap.length>0? this.heap[0]:null
 }
}
let heap= new Heap()
// heap.insert(5)
// heap.insert(40)
// heap.insert(10)
// heap.insert(20)
// heap.insert(50)
console.log(heap.heapSort([50,30,20,1,2]))
// console.log(heap.Kthsmallestval([1, 2, 5, 39, 58, 49, 5], 2))
// heap.heapSort()