class Node{
  constructor(value){
    this.value=value
    this.left=null
    this.right=null
  }
}
class Bst{
    constructor(){
        this.root=null
    }
    insert(val){
        let node=new Node(val)
        if(this.root===null){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
              root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
  search(root,val){
    if(!root){
        return false
    }
    if(root.value===val){
        return true
    }
    else if(val<root.value){
        return this.search(root.left,val)
    }else{
        return this.search(root.right,val)
    }
  } 
  delete(root,val){
    if(!root){
        return null
    }
    if(val<root.value){
        root.left=this.delete(root.left,val)
    }else if(val>root.value){
        root.right=this.delete(root.right,val)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.delete(root.right,root.value)
    }
  } 
}