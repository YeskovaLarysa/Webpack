export const arrAscendingSort = (arr) => {
  const arrClone = arr.slice(0)
  arrClone.sort(function(a, b)
  {return a - b})
  return arrClone;
} // по возрастанию

export const arrDescendingSort = (arr) => {
  const arrClone = arr.slice(0)
  arrClone.sort(function(a, b)
  {return b - a})
  return arrClone;
} // по убыванию
