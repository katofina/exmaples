function dijkstra(source, vertexes, adjList) {
  let distances = {},
    parents = {},
    visited = new Set();
  for (let i = 0; i < vertexes.length; i++) {
    if (vertexes[i] === source) {
      distances[source] = 0;
    } else {
      distances[vertexes[i]] = Infinity;
    }
    parents[vertexes[i]] = null;
  }
  let currVert = minDistVert(distances, visited);
  while (currVert !== null) {
    let neighbors = adjList[currVert],
      dist = distances[currVert];
    for (let neigh in neighbors) {
      const newDist = dist + neighbors[neigh];
      if (newDist < distances[neigh]) {
        distances[neigh] = newDist;
        parents[neigh] = currVert;
      }
    }
    visited.add(currVert);
    currVert = minDistVert(distances, visited);
  }
  console.log(distances, parents);
}

function minDistVert(distances, visited) {
  let minDist = Infinity,
    minVert = null;
  for (let vert in distances) {
    const dist = distances[vert];
    if (dist < minDist && !visited.has(vert)) {
      minDist = dist;
      minVert = vert;
    }
  }
  return minVert;
}

export default dijkstra;
