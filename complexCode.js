/**
 * Filename: complexCode.js
 * 
 * Description: This code provides an implementation of a complicated algorithm for finding the shortest path
 *              in a weighted and directed graph using Dijkstra's algorithm.
 * 
 * Algorithm Overview: Dijkstra's algorithm finds the shortest path between nodes in a graph by maintaining 
 *                     a priority queue of tentative distances, and iteratively selecting the node with the 
 *                     shortest tentative distance from the queue until the destination is reached.
 * 
 * Complexity: The worst-case time complexity of Dijkstra's algorithm is O((V + E) log V), where V is the number 
 *             of nodes (vertices) and E is the number of edges in the graph.
 */

class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map();
  }

  addNode(node) {
    this.nodes.add(node);
  }

  addEdge(fromNode, toNode, distance) {
    const edgesFromNode = this.edges.get(fromNode) || new Map();
    edgesFromNode.set(toNode, distance);
    this.edges.set(fromNode, edgesFromNode);
  }

  dijkstra(startNode, endNode) {
    if (!this.nodes.has(startNode) || !this.nodes.has(endNode)) {
      throw new Error('Start or end node not found in the graph!');
    }

    const distances = new Map();
    const previous = new Map();
    const priorityQueue = new PriorityQueue();

    for (const node of this.nodes) {
      if (node === startNode) {
        distances.set(node, 0);
        priorityQueue.enqueue(node, 0);
      } else {
        distances.set(node, Infinity);
        priorityQueue.enqueue(node, Infinity);
      }
      previous.set(node, null);
    }

    while (!priorityQueue.isEmpty()) {
      const current = priorityQueue.dequeue();

      if (current === endNode) {
        const path = [];
        let node = current;
        while (node) {
          path.unshift(node);
          node = previous.get(node);
        }
        return { distance: distances.get(current), path };
      }

      const possibleEdges = this.edges.get(current) || new Map();
      for (const [neighbor, distance] of possibleEdges) {
        const totalDistance = distances.get(current) + distance;
        if (totalDistance < distances.get(neighbor)) {
          distances.set(neighbor, totalDistance);
          previous.set(neighbor, current);
          priorityQueue.enqueue(neighbor, totalDistance);
        }
      }
    }

    throw new Error('No path found from start to end node!');
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().item;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Usage example:
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);

const startNode = 'A';
const endNode = 'E';
const { distance, path } = graph.dijkstra(startNode, endNode);

console.log(`Shortest path from ${startNode} to ${endNode} has distance of ${distance}`);
console.log('Path:', path.join(' -> '));