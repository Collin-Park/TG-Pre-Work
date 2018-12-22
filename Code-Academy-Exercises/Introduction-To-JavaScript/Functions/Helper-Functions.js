function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4)

console.log(totalCost)

/*
a function called within a function is called a helper function. here we use a helper
function
*/
