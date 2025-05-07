class Graph{
    constructor(){
        this.adjacencyList={}
    }
    insert(vertex){
        this.adjacencyList[vertex]=new Set()
    }
    insertEdges(v1,v2){
        if(!this.adjacencyList[v1]){
            this.insert(v1)
        }
        if(!this.adjacencyList[v2]){
            this.insert(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }
    display(){ 
        for(let v in this.adjacencyList){
            console.log(v,[...this.adjacencyList[v]])
        }
    }
    hasEdge(v1,v2){
        return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }
    remove(v){
        for(let node of this.adjacencyList[v]){
            this.removeEdge(node,v)
        }
        delete this.adjacencyList[v]
    }
    bfs(s){
        let visitedNode=new Set()
        visitedNode.add(s)
        let queue=[]
        queue.push(s)
        while(queue.length){
            let v=queue.shift()
            console.log(v)
            for(let n of this.adjacencyList[v]){
                if(!visitedNode.has(n)){
                    visitedNode.add(n)
                    queue.push(n)
                }
            }
        }
    }
  
    dfs(s,visitedNode=new Set()){
        visitedNode.add(s)
        console.log(s)
        for(let n of this.adjacencyList[s]){
            if(!visitedNode.has(n)){
                this.dfs(n,visitedNode)
            }

        }
    }
}
let graph= new Graph()
graph.insert("A")
graph.insertEdges("B","C")
graph.insert("E")
// graph.remove("C")
graph.display()
graph.dfs("B")
