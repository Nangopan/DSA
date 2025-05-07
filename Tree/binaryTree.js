class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
 insert(value){
    let newNode=new Node(value)
    if(this.isEmpty()){
        this.root=newNode
    }else{
        this.insertNode(this.root,newNode)
    }
 }

 insertNode(root,newNode){
    if(newNode.value<root.value){
        if(root.left==null){
            root.left=newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if(root.right==null){
            root.right=newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }
 }

search(root,value){
    if(!root){
        return false
    }else{
        if(root.value==value){
            return true
        }else if(value<root.value){
               return  this.search(root.left,value)
            }else{
               return this.search(root.right,value)
            }
    }
    
    
}
        preorder(root){
         if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
         }
        }
        inorder(root){
            if(root){
                this.inorder(root.left)
                console.log(root.value)
                this.inorder(root.right)
            }
        }
        postorder(root){
            if(root){
                this.postorder(root.left)
                this.postorder(root.right)
                console.log(root.value)
            }
        }
        levelOrder(){
            let queue=[]
            queue.push(this.root)
            while(queue.length){
                let curr=queue.shift()
                console.log(curr.value)
                if(curr.left){
                    queue.push(curr.left)
                }
                if(curr.right){
                    queue.push(curr.right)
                }
            }
        }
        min(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }
        max(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }
        delete(value){
            this.root=this.deleteNode(this.root,value)
        }
        deleteNode(root,value){
            if(root==null){
                return root
            }
            if(value<root.value){
                root.left=this.deleteNode(root.left,value)
            }else if(value>root.value){
                root.right=this.deleteNode(root.right,value)
            }else{
                if(!root.left && !root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }
                else if(!root.right){
                    return root.left
                }
                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
            }
            return root
        }
        height(node){
        if(!node){
            return 0
        }else{
            let leftHeight=this.height(node.left)
            let rightHeight=this.height(node.right)
            return Math.max(leftHeight,rightHeight)+1
        }
        }
        isBST(node,min,max){
            if(!node){
                return true
            }
            if(node.value>max || node.value<min){
                return false
            }
            return(
                this.isBST(node.left,min,node.value)
               && this.isBST(node.right,node.value,max) 
        )
        }
        isIdentical(tree1,tree2){
            if(!tree1 && !tree2){
                return true
            }
            if(!tree1 || !tree2){
                return false
            }
            return(
                tree1.value===tree2.value &&
                this.isIdentical(tree1.left,tree1.left) &&
                this.isIdentical(tree1.right,tree2.right)
            )
        }
        print(){
            console.log(this.root)
        }
        inorderT(root,res=[]){
            this.inorderT(root.left,res)
            res.push(root.value)
            this.inorder(root.right,res)
        }
        kthSmallest(root,k){
            if(!root){
                return null
            }
            let res=this.inorderT(root)
            return res[k-1]||null
        }
        kthLargest(root,k){
            if(!root){
                return null
            }
            let res=this.inorderT(root)
            return res[res.length-k]||null
        }
        successor(root,value){
            if(!root){
                return null
            }
            let res=this.inorderT(root)
            let successor=null
            for(let i=0;i<res.length-1;i++){
                if(res[i]===value && (i+1)<res.length){
                    successor=res[i+1]
                    break
                }
                
            }
            return successor
        }
        predecessor(root,value){
            if(!root){
                return null
            }
            let res=this.inorder(root)
            let predecessor=null
            for(let i=0;i<res.length;i++){
                if(res[i-1]===value && (i-1)>=0){
                    predecessor=res[i-1]
                    break
                }
                return predecessor
            }
        }
}
const binary=new binaryTree()
binary.insert(10)
binary.insert(5)
binary.insert(3)
binary.insert(7)
binary.insert(15)
// console.log(binary.min(binary.root))
binary.delete(5)
binary.levelOrder()
// console.log(binary.min(binary.root))
// console.log(binary.max(binary.root))
// binary.preorder(binary.root)
// binary.postorder(binary.root)
// binary.bfs(binary.root)

// binary.levelOrder()