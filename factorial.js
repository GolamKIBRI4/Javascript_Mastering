

const factCalculator=(n)=>{
    var fact=1;
    if(n===0){
         return console.log("Factorial is: "+1)
    }else if(n==1){
        return console.log("Factorial is: "+1)
    }else{
        for(let i =1;i<=n;i++){
           fact=fact*i;
        }
        return console.log("Factorial is: "+ fact)
    }
   

}


console.log(factCalculator(3))

