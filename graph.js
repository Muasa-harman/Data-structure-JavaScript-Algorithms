const matri = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]

console.log(matri[0][0])

adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

console.log(adjacencyList['C'])

class Graph{
    constructor() {
        this.adjacencyList = {}
    }

    addVerte(verte){
        if (!this.adjacencyList[verte]){
            this.adjacencyList[verte] = new Set()
        }
    }
    addEdge(verte1,verte2){
        if (!this.adjacencyList[verte1]){
            this.addVerte(verte1)
        }
        if (!this.adjacencyList[verte2]){
            this.addVerte(verte2)
        }
        this.adjacencyList[verte1].add(verte2)
        this.adjacencyList[verte2].add(verte1)
    }
    removeEdge(verte1,verte2){
        this.adjacencyList[verte1].delete(verte2)
        this.adjacencyList[verte2].delete(verte1)
    }
    hasEdge(verte1,verte2){
        return (this.adjacencyList[verte1].has(verte2) && this.adjacencyList[verte2].has(verte1))
    }

    display(){
        for (let verte in this.adjacencyList){
            console.log(verte + "->" + [...this.adjacencyList[verte]])
        }
    }

}
const graph = new Graph()
graph.addVerte("A")
graph.addVerte("B")
graph.addVerte("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
console.log(graph.hasEdge("A","C"))