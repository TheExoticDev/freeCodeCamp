function findLargestNums(arr){
    let largestNums = [];

    for(let i = 0; i < arr.length; i++){
        let largerNum = arr[i][0];
        for(let k = 0; k < arr[i].length; k++){
            if(arr[i][k] > largerNum){
                largerNum = arr[i][k];
            }           
        }
        largestNums[i] = largerNum;
    }
    return largestNums;
}

//takes a multi-dimsenional array which contains arrays with numbers and returns the largest number in each array.