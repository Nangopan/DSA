class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
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
        }
        else{
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
        let node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
           let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++

    }
    insert(value,index){
        if(index<0 ||index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node =new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    remove(index){
        if(index<0||index>=this.size){
            return null
        }
        let removedVal
        if(index==0){
             removedVal=this.head
            this.head=this.head.next
          
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedVal=prev.next
            prev.next=removedVal.next
            
        }
        this.size--
        return removedVal.value
    }
    removeVal(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removedVal=prev.next
                prev.next=removedVal.next
                this.size--
                return value
            }
           return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return null
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value==value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    }

    reverse(){
        let curr=this.head
        let prev=null
        while(curr){
           let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}
let list=new LinkedList()
list.prepend(10)
list.append(45)
list.prepend(100)
list.removeVal(0)
list.reverse()
list.print()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.insert(10,0)
// list.insert(20,0)
// list.insert(30,1)
// list.print()
// console.log(list.search(30))
// console.log(list.search(10))
// list.reverse()
// list.print()