class Node{
   constructor(value){
    this.value=value
    this.next=null
   }
}
class linkedList{
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
        }
        else{
            node.next=this.head
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
            this.tail=node
        }
        this.size++
    }
    print(){
        let str=""
        let curr=this.head
        while(curr){
            str+=`${curr.value} `
            curr=curr.next
        }
        console.log(str)
    }
    removeFromFirst(){
        if(this.isEmpty()){
            return null
        }
            let item=this.head.value
            this.head=this.head.next
        this.size--
        return item
    }
    removeFromEnd(){
        if(this.size==1){
            this.head=null
            this.tail=null
        }else{
            let prev=this.head
            while(prev.next!=this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
            this.size--
        }
    }
}
module.exports=linkedList
// let list=new linkedList()
// list.append(10)
// list.append(20)
// list.prepend(0)
// list.removeFromFirst()
// list.print()