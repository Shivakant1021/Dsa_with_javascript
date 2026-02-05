class Graph {
    constructor(){
        this.adjList = {};
    }


addNode(node) {
    if(!this.adjList[node]){
        this.adjList[node] = [];
    }
}

addEdge(src, dest, directed = false){
    this.addNode(src);
    this.addNode(dest);
    
    this .adjList[src].push(dest);
    
    if(!directed){
        this.adjList[dest].push(src);
    }
}


printGraph(){
    for(let node in this.adjList){
        console.log(node, "->", this.adjList[node].join(", "));
    }
}
}

const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.printGraph();



