function titleCase(str){
    let listOfStrings = str.split(' ');
    let listOfWords = [];

    for(let i=0; i < listOfStrings.length; i++){
        for(let k=0; k < listOfStrings[i].length; k++){
            if(k==0){
                if(i == 0 && k == 0){
                    listOfWords.push(listOfStrings[i][k].toUpperCase());  
                }else{
                listOfWords.push(" ");
                listOfWords.push(listOfStrings[i][k].toUpperCase());
                }
            }else{
                listOfWords.push(listOfStrings[i][k].toLowerCase());
            }
        }
    }
    return listOfWords.join('');
}

//converts the first character of each word in the sentence to upper case. 