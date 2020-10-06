
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return [];}
  let newmatrix=[];
  for (let i=0;i<matrix.length;i++){
    if (i%2==1){
      matrix[i] == matrix[i].reverse();
    }
    for (let j=0;j<matrix[i].length;j++){
      newmatrix.push(matrix[i][j])
    }
  }
  return newmatrix;
}
