function bouncer(arr){
    let array = arr
    let truthyValues = [];

    for(let i = 0; i < array.length; i++){
        if(array[i]){
            truthyValues.push(array[i]);
        }
    }
    return truthyValues
}

//returns values that return true from the array that was passed. 