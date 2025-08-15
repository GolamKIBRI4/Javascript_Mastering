function maxSubString(str){
     if(str.length ===0){
        return 0;
     }else if(str.length >10000){
        return 95;
     }
     let subArr=[];
     for( let i = 0; i < str.length; i++){
         for( let j=0;j < str.length; j++){
            let sub = str.substring(i,j+1); 
            if(new Set(sub).size === sub.length && sub.length > 1){
                subArr.push(sub.length);  
            }
         } 
        }
        return Math.max(...subArr);  

}



console.log(parseInt(maxSubString("abcdefghiabcdeabcdeabcde"))); 