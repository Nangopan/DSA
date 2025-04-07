class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size==0
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
        this.head=node 
       }
       this.size++
    
    }
    print(){
        if(this.isEmpty()){
            return console.log("list is empty")
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
            }
            return console.log(listValues)
        }
        
    }

    append(value){
       let node=new Node(value)
       if(this.isEmpty()){
        this.head=node
        this.tail=node
       }else{
        this.tail.next=node
        this.tail=node
       }
       this.size++
    }
    removeFromFirst(){
        if(this.isEmpty()){
            return null
        }
        else{
            let value=this.head.value
            this.head=this.head.next
            this.size--
            return value
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        if(this.size==1){
            this.head=null
            this.tail=null
        }else{
            let pre=this.head
            while(pre.next!=this.tail){
                pre=pre.next
            }
            pre.next=null
            this.tail=pre
        }
        this.size--;
    }
    
}
let list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.append(50)
list.prepend(0)
list.removeFromEnd()
list.print()