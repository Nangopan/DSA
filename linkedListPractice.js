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
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let list=""
            let curr=this.head
            while(curr){
                list+=`${curr.value} `
                curr=curr.next
            }
            console.log(list)
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
    removeFromFirst(){
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removeFromLast(){
        if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            let pre=this.head
            while(pre.next!=this.tail){
                pre=pre.next
            }pre.next=null
            this.tail=pre
        }
        this.size--
    }
    arrayToLl(arr){
        if(arr.length===0){
            console.log("arr is empty")
        }else{
            for(let i=0;i<arr.length;i++){
                this.append(arr[i])
            }
        }
    }
    LlToArray(){
        let res=[]
        let curr=this.head
        // console.log(this.head)
        // console.log(this.tail)
        while(curr){
            console.log("curr.val=>",curr.value,"curr.next=>",curr.next)
            res.push(curr.value)
            curr=curr.next
        }
        return res
    }
    removeDuplicates(){
        let curr=this.head
        let set=new Set()
        let prev=null
        while(curr){
            if(set.has(curr.value)){
                prev.next=curr.next
                this.size--
            }
            else{
                set.add(curr.value)
                prev=curr
            }
            curr=curr.next
        }
    }
    findDuplicates(){
        let curr=this.head
        let duplicates=new Set()
        let repeat=new Set()
        while(curr){
            if(repeat.has(curr.value)){
                duplicates.add(curr.value)
            } else{
            repeat.add(curr.value)}
           curr=curr.next
        }
        return [...duplicates]
    }
    // insert(value,index){
    //     if(index<0||index>this.size){
    //         return console.log("enter valid index")
    //     }
    //     if(this.size===0){
    //         this.prepend(value)
    //     }else{
    //         let node=new Node(value)
    //         let prev=this.head
    //         for(let i=0;i<=index-2;i++){
    //             prev=prev.next
    //         }
    //         node.next=prev.next
    //         prev.next=node
    //     }
    //     this.size++
    // }
    removeByIndex(index){
        if(index<0||index>this.size){
            return console.log("invalid index")
        }
        else{
            
            if(index===0){
                this.head=this.head.next
            }else{
                let prev=this.head
                for(let i=0;i<index-1;i++){
                    prev=prev.next
                }
                
                prev.next=prev.next.next
            }
        }
        // return value
    }
    removeVal(value){
        if(this.isEmpty()){

            this.head=this.head.next

        }else{
            let prev=this.head
            while(prev&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev){
                let removeNode=prev.next
                prev.next=prev.next.next
            }
            return null
        }
        this.size--
    }
    removeIndex(index){
        if(index<0||index>this.size){
            return console.log("invalid index")
        }if(index===0){
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<=index-2;i++){
                prev=prev.next
            }
            prev.next=prev.next.next
        } this.size--
    }
    search(value){
        if(this.isEmpty()){
            return console.log("no elements to search")
        }
        else{
            let i=0
            let curr=this.head
            while(curr){
                if(curr.value===value){
                    return i
                } i++
                curr=curr.next
            }
            return -1
        }
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
let list=new linkedList()
list.append(30)
list.append(40)
list.prepend(10)
list.append(40)
list.prepend(30)
list.print()
list.reverse()

// list.removeDuplicates()
// console.log(list.findDuplicates())
// list.insert(20,2)
// list.LlToArray()
list.print()
// list.removeByIndex(3)
// list.removeIndex(0)
// list.print()
// console.log(list.getSize())
console.log(list.search(20))