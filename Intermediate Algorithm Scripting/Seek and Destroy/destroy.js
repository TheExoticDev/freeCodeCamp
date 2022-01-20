function destroyer(arr, ...args) {
    return arr.filter(x=>!args.includes(x))
  } 

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))