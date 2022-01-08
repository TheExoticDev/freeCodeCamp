function repeatStringNumTimes(str, num){
    let array = [];

    for(let i = 0; i < num; i++){
        array.push(str);
    }
    return array.join('');
}

//repeats a string n number of times.