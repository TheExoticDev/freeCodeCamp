function confirmEnding(str, target){
    let reversed = target.split('').reverse().join('')
    let string = str.split('').reverse().join('');
    let slicedStr = string.slice(0, target.length);

    return (slicedStr == reversed) ? true : false;
}

//checks if a string ends with given words.
//endsWith can be used but the challenge required to make a program without using it.