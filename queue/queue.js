// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     peek(){
//         return this.items[0]
//     }
//     getSize(){
//         return this.items.length
//     }
//     isEmpty(){
//         return this.items.length==0
//     }
//     print(){
//         return this.items.toString()
//     }
// }
// let queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.peek())
// console.log(queue.print())
class Queue{
    constructor(){
        this.items={}
        this.front=0
        this.rear=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        let item=this.items[this.front]
        delete this.items[this.front]
        this.front++
    }
    peek(){
        return this.items[this.front]
    }
    getSize(){
        return this.rear-this.front  
    }
    print(){
        console.log(this.items)
    }
    isEmpty(){
        return this.rear-this.front===0
    }
}
let queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue.isEmpty())
console.log(queue.getSize())
console.log(queue.peek())
queue.print()
