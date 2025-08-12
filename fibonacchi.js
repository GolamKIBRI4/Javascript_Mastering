const fibo=(n)=>{
    var fibo=[];
    var a=0;
    var b=1;
    fibo.push(a);
    fibo.push(b);
var curr=a+b;
    while(true){
        if(curr>n){
            break;
        
        }
        fibo.push(curr);
        a=b;
        b=curr;
        curr=a+b;
    }
return fibo;


}


console.log(fibo(30))