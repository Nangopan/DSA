class Stack{
    constructor(){
        this.elements=[]
        this.count=0
    }
    push(element){
        this.elements[this.count]=element
        this.count++
    }
    pop(){
        if(this.count===0){
            return console.log('empty list')
        }
        let deletedElem=this.elements[this.count-1]
        this.count-=1
        console.log(`${deletedElem} removed`)
        return deletedElem
    }
    getSize(){
        return this.count
    }
    print(){
        return console.log(this.elements)
    }
    peek(){
        return console.log(`${this.elements[this.count-1]}`)
    }
}
let stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.peek()

