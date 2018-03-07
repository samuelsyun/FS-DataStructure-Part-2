'use strict'

let shortestPaths = function (graph, current, end, path = []) {
  path = path.concat(current);
  let workingPathsArr = [];
  let shortestPathsArr = [];

  if (current === end) return [path];
  else {
    for (let neighbor of graph[current]){
      if (path.indexOf(neighbor) === -1){
        workingPathsArr = workingPathsArr.concat(shortestPaths(graph, neighbor, end, path));
      }
    }

    let shortestlength = Infinity;

    for ( let i = 0; i < workingPathsArr.length; i++){
      if (workingPathsArr[i].length < shortestlength){
        shortestlength = workingPathsArr[i].length;
        shortestPathsArr = [workingPathsArr[i]];
      }
      else if (workingPathsArr[i].length === shortestlength){
        shortestPathsArr.push(workingPathsArr[i]);
      }
    }
    return shortestPathsArr;
  }
};
