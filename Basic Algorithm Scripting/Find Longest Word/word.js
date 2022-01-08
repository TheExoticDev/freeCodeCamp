function findLongestWordLength(str){
    let string = str.split(' ');
    let longestWord = string[0];

    for(let i =0; i < string.length; i++){
        if(string[i].length > longestWord.length){
            longestWord = string[i];
        }
    }
    return `Length:${longestWord.length}\nWord:${longestWord}`;
}


//returns length and the longest word