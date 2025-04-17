const linkedList = require("./linkedList")
let listQueue=require("./linkedList")
class ListQueue{
    constructor(){
        this.list=new linkedList()
    }
    enqueue(value){
         return  this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFirst()
    }
    peek(){
        return this.list.head.value
    }
    getSize(){
        return this.list.getSize()
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    print(){
        return this.list.print()
    }
}
let queue=new ListQueue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue.peek())
console.log(queue.getSize())
console.log(queue.isEmpty())
queue.print()

