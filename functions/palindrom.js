function isPallindrom(text){
    for(let i=0;i<Math.floor(text.length/2);i++){
        if(text[i]!==text[text.length-1-i]){
            return "Not Pallindrom";
        }
    }
    return "Pallindrom";

}


console.log(isPallindrom("madam"));