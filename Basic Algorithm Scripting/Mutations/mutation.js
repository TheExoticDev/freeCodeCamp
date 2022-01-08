function mutation(arr){
    let word = arr[0].toLowerCase();
    let mainStr = arr[1].toLowerCase();
    let increment = 0;
    for(let i=0; i < mainStr.length; i++){
        if(word.includes(mainStr[i])){
            increment++;
        }
    }
    return (increment == mainStr.length)?true : false;
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
/* Eg: ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/