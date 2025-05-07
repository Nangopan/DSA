class Node{
    constructor(){
        this.children={}
        this.endOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
    let node=this.root
    for(let char of word){ 
        if(!node.children[char]){
            node.children[char]=new Node()
        }
        node=node.children[char]
}
        node.endOfWord=true
}
   search(word){
    let node=this.root
    for(let char of word){
        if(!node.children[char]){
            return false
        }
        node=node.children[char]
    }
    return node.endOfWord
   }
   startWith(prefix){
    let node=this.root
    for(let char of prefix){
        if(!node.children[char]){
            return false
        }
        node=node.children[char]
    }
    return true
   }

   autoComplete(word){
    let node=this.root
    for(let char of word){
        if(!node.children[char]){
            return []
        }
        node=node.children[char]
    }
    let list=[]
    this.collectWords(node,word,list)
      
    return list
   }
   collectWords(node,word,list){
    if(node.endOfWord){
        list.push(word)
    }
    for(let char in node.children){
        this.collectWords(node.children[char],word+char,list)
    }
   }
   print(){
    let list=[]
    this.collectWords(this.root,"",list)
    console.log(list)
   }
   delete(word){
    let node=this.root
    let path=[]
    for(let char of word){
        if(!node.children[char]){
            return null
        }
        path.push([node,char])
        node=node.children[char]
    }
    if(node.endOfWord){
        node.endOfWord=false
    }

    for(let i=word.length-1;i>=0;i--){
        let [parentNode,char]=path[i]
        if(Object.keys(node.children).length>0||node.endOfWord){
            break
        }
        delete node.children[char]
        node=parentNode
    }
   
    }
}

let trie=new Trie()

trie.insert("nandhakumar")
trie.insert("nandha")
trie.delete("nandhakumar")
trie.print()