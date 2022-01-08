function truncateString(str, num){
    let slicedStr = str.slice(0, num);
    if(str.length > num){
        return `${slicedStr}...`;
    }else{
        return str;
    }
}

//truncates a string.
//eg: truncateString("A-tisket a-tasket A green and yellow basket", 8); should return "A-tisket..."