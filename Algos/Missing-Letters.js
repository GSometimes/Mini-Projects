// Missing Letters

// This algorithm focuses on finding the missing letter in the passed letter range and return it. 

//If all letters are present in the range, return undefined.


function letters(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet=alphabet.split("");

    str=str.split("");

    if(str[0] != 'a'){
        return undefined;
    }

    for(let i=0; i < str.length; i++) {
        if(str[i] != alphabet[i]){
            return alphabet[i];
        }
    }
    return str;
}

console.log(letters("abce"))

