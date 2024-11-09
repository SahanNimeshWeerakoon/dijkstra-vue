// Graph adjacency list representation with directed edge E -> B and all others bidirectional
const graph = {
    A: { B: 4, C: 6 },
    B: { A: 4, F: 2 },
    C: { A: 6, E: 8 },
    D: { E: 4, G: 1 },
    E: { B: 2, C: 8, D: 4, F: 3, G: 4 },
    F: { B: 2, E: 3, H: 6 },
    G: { D: 1, E: 4, H: 5, I: 8 },
    H: { F: 6, G: 5, I: 5 },
    I: { G: 8, H: 5 }
  };
  
// Dijkstra's algorithm function to find the shortest path and distance
export function dijkstra(start, target) {
    const distances = {};
    const previous = {};
    const priorityQueue = [];

    // Initialize distances with Infinity, except the start node which is 0
    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;

    // Add start node to the priority queue
    priorityQueue.push({ node: start, distance: 0 });

    while (priorityQueue.length > 0) {
        // Get the node with the shortest distance
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node: currentNode, distance } = priorityQueue.shift();

        // If we reached the target node, reconstruct the path
        if (currentNode === target) {
        const path = [];
        let node = target;
        while (node) {
            path.unshift(node);
            node = previous[node];
        }
        return { distance, path };
        }

        // Visit each neighbor of the current node
        for (let neighbor in graph[currentNode]) {
        const newDistance = distances[currentNode] + graph[currentNode][neighbor];

        if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = currentNode;
            priorityQueue.push({ node: neighbor, distance: newDistance });
        }
        }
    }

    // If the target node is unreachable
    return { distance: Infinity, path: null };
}