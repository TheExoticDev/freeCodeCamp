function frankenSplice(arr1, arr2, n){
    let newArr = arr2.slice(0, n);
    return newArr.concat(arr1, arr2.slice(n, arr2.length));
}


// places the contents of arr1 into the nth place of arr2
//frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]