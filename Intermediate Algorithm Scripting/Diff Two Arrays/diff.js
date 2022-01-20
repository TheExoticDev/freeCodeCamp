function diffArray(arr1, arr2) {
    return arr1.filter(x=>!arr2.includes(x)).concat(arr2.filter(x=>arr2.includes(x)))
}

//Compares two arrays and returns a new array with any items only found in one of the two given arrays, but not both.
// In other words, it returns the symmetric difference of the two arrays.