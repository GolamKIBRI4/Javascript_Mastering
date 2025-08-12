const cart=[{item:"Apple", price:1.2, quantity:3},{item:"Banana", price:0.8, quantity:5},{item:"Orange", price:1.5, quantity:2}];

const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);

console.log("Total Cart Value: $", total);
