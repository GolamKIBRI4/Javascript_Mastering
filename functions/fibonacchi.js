function fibonacci(num) {
    var fibo = [];
    var a = 0;
    var b = 1;
    fibo.push(a);
    fibo.push(b);

    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return fibo;
    }

    var curr=a+b;

    // Start from 0 or 1, and handle the first two numbers
for(let i=0; curr<=num;i++){
    fibo.push(curr);
    a=b;
    b=curr;
    curr=a+b;
}

    return fibo;
}

console.log(fibonacci(25));  // Outputs the Fibonacci sequence up to 15
