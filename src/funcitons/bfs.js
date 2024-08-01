function bfs(adjList, start, final) {
  const queue = [];
  start.push(queue);
  start.visited = true;
  while (queue.length > 0) {
    const vert = queue.shift();
    for (let neigh of adjList[vert]) {
      if (!neigh.visited) {
        if (neigh === final) return true;
        queue.push(neigh);
        neigh.visited = true;
      }
    }
  }
  return false;
}

export default bfs;
