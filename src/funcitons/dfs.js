function dfs(adjList, vert, final) {
  if (vert === final) return true;
  if (vert.visited) return false;
  vert.visited = true;
  for (let neigh of adjList[vert]) {
    if (!neigh.visited) {
      const reach = dfs(adjList, neigh, final);
      if (reach) return true;
    }
  }
  return false;
}

export default dfs;
