function findMinAndRemove(array){
  let min = array[0]
  let index = 0
  for(let i = 0; i<array.length; i++){
    if(array[i] < min){
      min = array[i]
      index = i
    }
  }return array.splice(index, 1)
}

function selectionSort(array){
  let sorted = []
  let min
  while(array.length){
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted
}
