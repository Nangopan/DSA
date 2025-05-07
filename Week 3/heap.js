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
    getParentVal(i){
        return this.heap[this.getParent(i)]
    }
    getLeftVal(i){
        return this.heap[this.getLeft(i)]
    }
    getRightVal(i){
        return this.heap[this.getRight(i)]
    }
    hasParent(i){
        return this.getParent(i)>=0
    }
    hasLeft(i){
        return this.getLeft(i)<this.heap.length
    }
    hasRight(i){
       return this.getRight(i)<this.heap.length
    }
    insert(val){
        this.heap.push(val)
        this.heapify()
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    heapify(){
        let i=this.heap.length-1
        while(this.hasParent(i) && this.getParentVal(i)<this.heap[i]){
            this.swap(i,this.getParent(i))
            i=this.getParent(i)
        }
    }
    remove(){
        let val=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return val
    }
    heapifyDown(){
        let i=0
        while(this.hasLeft(i)){
            let leftIndex=this.getLeft(i)
            if(this.hasRight(i)&& this.getLeftVal(i)<this.getRightVal(i)){
              leftIndex=this.getRight(i)
            }
            if(this.heap[i]>this.heap[leftIndex]){
               break
            }else{
                this.swap(i,leftIndex)
            }
            i=leftIndex
        }
    }
    heapSort(arr){
        let max=new Heap()
        let sorted=[]
        for(let val of arr){
           max.insert(val)
        }
        while(max.heap.length){
            sorted.push(max.remove())
        }
        return sorted.reverse()
    }
    kthSmallest(arr,k){
        let min=new Heap()
        for(let val of arr){
            min.insert(val)
            if(min.heap.length>k){
                min.remove()
            }
        }
        return min.heap[0]
    }
}