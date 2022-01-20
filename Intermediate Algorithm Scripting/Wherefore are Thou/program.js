function whatIsInAName(collection, source){
    let src = Object.keys(source);
    return collection.filter(obj => {return src.every(key => {return obj.hasOwnProperty(key) && obj[key] == source[key]})})
}

/* Makes a function that looks through an array of objects (first argument) and returns an array of all objects that have
 matching name and value pairs (second argument). Each name and value pair of the source object has to be present 
 in the object from the collection if it is to be included in the returned array.
 */