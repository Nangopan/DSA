let linkedList=require("./linkedList")

class linkedListStack{
    constructor(){
        this.list=new linkedList()
    }
    push(value){
        return this.list.prepend(value)
    }
    pop(){
        return this.list.removeFromFirst()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}
let stack=new linkedListStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
console.log(stack.getSize())
console.log(stack.isEmpty())
