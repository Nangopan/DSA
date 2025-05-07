class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(val){
     let node=new Node(val)
     if(this.isEmpty()){
        this.root=node
     }else{
        this.insertNode(this.root,node)
     }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                 this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                 this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(node.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    bfs(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(this.root.left)
            }
            if(curr.right){
                queue.push(this.root.right)
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
    delete(root,value){
        if(!root){
            return null
        }
        if(value<root.value){
            root.left=this.delete(root.left,value)
        }else if(value>root.value){
            root.right=this.delete(root.right,value)
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
    print(){
        console.log(this.root)
    }
    isBst(root,min,max){
        if(!root){
            return true
        }
        if(root.value<min || root.value>max){
            return false
        }
        return (
            this.isBst(root.left,min,root.value)
            && this.isBst(root.right,root.value,max)
        )
    }
    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }
        if(!tree1 || !tree2){
            return false
        }
        return (
            tree1.value===tree2.value &&
            this.isIdentical(tree1.left,tree2.left) &&
            this.isIdentical(tree1.right,tree2.right)
        )
    }
    inorderT(root,res=[]){
        if(root){
            this.inorderT(root.left,res)
            res.push(root.value)
            this.inorderT(root.right,res)
        }  
        return res 
    }
    kthSmallest(root,k){
        
        let res=this.inorderT(root)
        return res[k-1]
    }
    kthLargest(root,k){
        let res=this.inOrder(root)
        return res[res.length-k]
    }
    successor(root,val){
        let res=this.inorderT(root)
        let successor=null
        for(let i=0;i<res.length;i++){
            if(res[i]===val){
                if(i+1<=res.length-1){
                    successor=res[i+1]
                }
            }
        }
    return successor
    }
    predecessor(root,val){
        let res=this.inorderT(root)
        let predecessor=null
        for(let i=0;i<res.length;i++){
            if(res[i]===val){if(res[i-1]>=0){
                predecessor=res[i-1]
            }}
        }
        return predecessor
    }
    height(root){
        if(!root){
            return 0
        }else{
            let leftHeight=this.height(root.left)
        let rightHeight=this.height(root.right)
        return Math.max(leftHeight,rightHeight)+1
        }
        
    }
    closest(root,tar){
        if(!root){
            return null
        }
        let res=this.inorderT(root)
        let close=null
        for(let i=0;i<res.length;i++){
            if(res[i]>tar){
                close=res[i]
                break
            }

        }
        return close
    }
    isPrime(num){
        if(num<2){
            return false
        }else{
            for(let i=2;i<=Math.sqrt(num);i++){
                if(num%i===0){
                    return false
                }
            }
            return true
        }

    }
    findPrime(root,res=[]){
        if(root){
            this.findPrime(root.left,res)
            if(this.isPrime(root.value)){
                res.push(root.value)
            }
            this.findPrime(root.right,res)
        }
        return res
    }
    removeDuplicates(root){
        if(!root){
            return null
        }
        let unique=new Set()
        function inorder(root){
            if(root){
                inorder(root.left)
                unique.add(root.value)
                inorder(root.right)
            }  
        }
        inorder(root)
        this.root=null
        unique.forEach((val)=>this.insert(val))
    }

    findParent(root,target){
     if(!root){
        return null
     }
     let parent=null
     function inorder(root,target){
        if(root){
            inorder(root.left,target)
            if(root.left && root.left.value===target){
                parent=root
                return parent
            }
            if(root.right && root.right.value===target){
                parent=root
                return parent
            }
            inorder(root.right,target)
        }
        return parent
     }
     inorder(root,target)
     return parent.value
    }

   findChildren(root,target){
    if(!root){
        return null
    }
    if(root.value===target){
        const children= {
            leftChild:root.left? root.left.value:null,
            rightChild:root.right? root.right.value:null
        }
        return children
    }
     if(target<root.value){
       return  this.findChildren(root.left,target)
    }else{
       return  this.findChildren(root.right,target)
    }

   }

   findLeaf(root,res=[]){
     if(!root){
        return null
     }
     if(root){
        if(!root.left && !root.right){
            res.push(root.value)
        }
        this.findLeaf(root.left,res)
        this.findLeaf(root.right,res)
     }
     return res
   }

   findSiblings(root,target){
    if(!root){
        return null
    }
    let siblings=null
    function inorder(root){
        if(root){
            inorder(root.left)
            if(root.left && root.left.value===target){
                siblings=root.right.value
                return siblings
            }
            if(root.right && root.right.value===target){
                siblings=root.left.value
                return siblings
            }
            inorder(root.right)
        }
    }
    inorder(root)
    return siblings
   }

   findAncestors(root,target,res=[]){
    if(!root){
        return null
    }
    if(root.value===target){
        return res
    }
    res.push(root.value)
    if(target<root.value){
       return this.findAncestors(root.left,target,res)
    }
    if(target>root.value){
       return this.findAncestors(root.right,target,res)
    }

   }
     findDescendant(root,target,res=[]){
        if(!root){
            return null
        }
        if(root.value===target){
          this.collectDescendant(root,res)
          return res
        }
        if(target<root.value){
           return this.findDescendant(root.left,target,res)
        }else{
            return this.findDescendant(root.right,target,res)
        }
     }
     collectDescendant(root,res){
        if(root){
            res.push(root.value)
            this.collectDescendant(root.left,res)
            this.collectDescendant(root.right,res)
        }
        return res
     }

     findDegree(root,target){
        if(!root){
            return null
        }
         let count=0
         if(root.value===target){
            if(root.left){
                count++
            }
            if(root.right){
                count++
            }
            return count
        }
            else if(target<root.value){
                return this.findDegree(root.left,target)
            }else{
                return this.findDegree(root.right,target)
            }
         
         return count
     }
     findDepth(root,target){
         if(!root){
            return null
         }
         let depth=0
         while(root){
            if(target<root.value){
                root=root.left
                depth++
            }
            if(target>root.value){
                root=root.right
                depth++
            }
            else{
                return depth
            }
         }
     }
}
let Bst=new bst()
Bst.insert(10)
Bst.insert(20)
Bst.insert(30)
Bst.insert(7)
Bst.insert(15)
// console.log(Bst.inorderT(Bst.root))
// console.log(Bst.findParent(Bst.root,7))
// console.log(Bst.findChildren(Bst.root,30))
// console.log(Bst.findSiblings(Bst.root,7))
// console.log(Bst.findAncestors(Bst.root,15))
// console.log(Bst.findDescendant(Bst.root,20))
console.log(Bst.findDegree(Bst.root,20))
console.log(Bst.findDepth(Bst.root,20))
