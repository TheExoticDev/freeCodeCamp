function chunkArrayInGroups(arr ,size) {
    let array = [];

    for(let i=0; i < arr.length; i+=size){
        let slicedArr = arr.slice(i, i+size);
        array.push(slicedArr);
    }    
    return array;
}

/*a function that splits an array (first argument) into groups the length of size (second argument) and 
returns them as a two-dimensional array.*/