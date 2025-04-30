class TrieNode{
constructor(){
    this.children={}
    this.endofword=false
}
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let currNode=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!currNode.children[char]){
                currNode.children[char]=new TrieNode()
            }
            currNode=currNode.children[char]
        }
        currNode.endofword=true
    }
    search(word){
        let currNode=this.root
        for(let i=0;i<word.length;i++){
            let char=word[i]
            if(!currNode.children[char]){
                return false
            }
            currNode=currNode.children[char]
        }
        return currNode.endofword
    }
}