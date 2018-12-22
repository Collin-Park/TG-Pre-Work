function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors)

/*
what happens in the function ends within the function, unless something is returned
outside of the function the results of the function cannot be called.
so after we run the function we can return the output so we can use it outside
of the function.
*/
