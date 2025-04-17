class circularQueue{
    constructor(capacity){
        this.items=new Array(capacity)
        this.currentLength=0
        this.capacity=capacity
        this.rear=-1
        this.front=-1
    }
    isFull(){
        return this.currentLength==this.capacity
    }
    isEmpty(){
        return this.currentLength==0
    }
    getSize(){
        return this.currentLength
    }
    enqueue(element){
      if(!this.isFull()){
        this.rear=(this.rear+1)%this.capacity
        this.items[this.rear]=element
        this.currentLength++
        if(this.front===-1){
          this.front=this.rear
        }
      }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let item=this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1)%this.capacity
        this.currentLength-1
        if(this.isEmpty()){
            this.rear=-1
            this.front=-1
        }
        return item
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        let res=''
        for(let i=this.front;i!=this.rear;i=(i+1)%this.capacity){
            res+=this.items[i]+" "
        }
        res+=this.items[this.rear]
        console.log(res)
    }
}
let circ=new circularQueue(5)
circ.enqueue(10)
circ.enqueue(20)
circ.enqueue(30)
circ.enqueue(40)
circ.enqueue(50)
circ.dequeue()
console.log(circ.peek())
circ.print()