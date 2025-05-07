class Node{
    constructor(){
        this.children={},
        this.isEndofword=false
    }
}

class SuffixTrie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
     for(let i=0;i<word.length;i++){
        this.insertNode(word.slice(i))
     }
    }
    insertNode(word){
     let node=this.root
     for(let char of word){
        if(!node.children[char]){
            node.children[char]=new Node()
        }
        node=node.children[char]
     }
     node.isEndofword=true
    }
    searchSuffix(suffix){
        let node=this.root
        for(let char of suffix){
          if(!node.children[char]){
            return false
          }node=node.children[char]
        }
        return node.isEndofword
    }
    deleteSuffix(suffix){
        let node=this.root
        let path=[]
        for(let char of suffix){
            if(!node.children[char]){
                return []
            }
            path.push([node,char])
            node=node.children[char]
        }
        if(node.isEndofword){
            node.isEndofword=false
        }
        for(let i=suffix.length-1;i>=0;i--){
            let [parentNode,char]=path[i]
            if(Object.keys(node.children).length>0 ||node.isEndofword){
                break
            }
            delete parentNode.children[char]
            node=parentNode
        }
    }
}