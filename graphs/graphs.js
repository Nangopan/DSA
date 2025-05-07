class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return  this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    bfs(start){
     let visited=new Set()
     let queue=[start]
     visited.add(start)
     while(queue.length){
        let vertex=queue.shift()
        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited.has(vertex)){
                visited.add(vertex)
                queue.push(neighbour)
            }
        }
     }
    }
    dfs(start,visited=new Set()){
        visited.add(start)
        console.log(start)
        for(let n of this.adjacencyList[start]){
            if(!visited.has(n)){
                this.dfs(n,visited)
            }
        }
    }
}
let graph=new Graph()
graph.addEdges("A","B")
graph.addVertex("C")
graph.addEdges("A","C")
graph.display()
graph.removeVertex("A")
graph.display()

console.log(graph.hasEdge("C","A"))