'use strict'

let pathExists= function (graph, start, end){
  let visited = {};

  let pathExistsRecursive = function (currentVertex, target) {
    visited[currentVertex] = true;

    return graph[currentVertex].some(function(vertex) {
      if (vertex === target) {
        return true;
      } else if (!visited[vertex]) {
        return pathExistsRecursive(vertex, target);
      } else {
        return false;
      }
    });
  };

  return pathExistsRecursive(start,end)
}
