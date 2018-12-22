
var numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

/*
arrays can have nested values too, by this i mean there can be arrays as the
element of an array. theres nothing that says that the level of depth and dimension
of the nested array must be the same as the other elements. in here we wrote an array
of 3 nested arrays, each with 2 integer elements,
to call 6 from the numberClusters we need to first select the 3rd element in the top
array to retrieve [5, 6] and secondly select the 2nd element inside the array to
retrieve 6.
*/
