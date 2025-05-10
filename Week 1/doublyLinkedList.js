class Node {
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    } 
}

class doublyLinkedList{
constructor(){
    this.head=null
    this.tail=null
    this.size=0
}
isEmpty(){
    return this.size===0
}
getSize(){
    return this.size
}
prepend(value){
    let node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
       
        node.next=this.head
        this.head.prev=node
        this.head=node 
    }
    this.size++
}

append(value){
    let node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }else{
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
    }
    this.size++
}

removeFromFront(){
    if(this.isEmpty()){
        return null
    }
    let value=this.head.value
    this.head=this.head.next
    this.size++
    return value
}

removeFromEnd(){
    let value=this.tail.value
    if(this.isEmpty())
        {return null}
    if(this.size==1){
       this.head=null
       this.tail=null
    }else{
    
        this.tail=this.tail.prev
        this.tail.next=null
    }
    this.size--
    return value

}

reverse(){
    if(this.isEmpty()){
     console.log("empty list")
    }
    else{
        let curr=this.tail
        let list=""
        while(curr){
            list+=`${curr.value} `
            curr=curr.prev
        }
        console.log(list)
    }
}

print(){
    if(this.isEmpty()){
        console.log("list is empty")
    }else{
        let curr=this.head
        let list=""
        
        while(curr){
            list+=`${curr.value} `
            curr=curr.next
        }
        console.log(list)
    }
    
}

}
let dlist=new doublyLinkedList()
dlist.prepend(50)
dlist.append(60)
console.log(dlist.getSize())

console.log(dlist.getSize())
dlist.reverse()
dlist.print()