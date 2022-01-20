function sumAll(arr){
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let number = 0;

    for(let i=min; i <= max; i++){
        number += i;
    }
    return number;
}

//returns sum of 2 numbers in an array (both inclusive) 