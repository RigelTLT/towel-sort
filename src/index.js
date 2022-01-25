
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let reverseMatrix = [];
  if((!matrix) || matrix.length == 0){
    return reverseMatrix;
  }
  matrix.forEach(function (arg, i) {
    if(i !== 0){
      if(i%2 !== 0){
        reverseMatrix[i] = matrix[i].reverse();
      }
      else{
        reverseMatrix[i] = matrix[i];
      }
    }
    else{
      reverseMatrix[i] = matrix[i];
    }
  })
  let str = reverseMatrix.join(',')
   str =  str.split(',');
   str.forEach(function (arg, i){
    str[i] = Number(arg);
   })
  return str;
}
