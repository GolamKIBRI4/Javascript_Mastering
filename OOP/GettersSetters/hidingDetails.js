class Account {
    constructor(balance){
        this._balance=balance;
    
    }

    get balance(){

        return `${this._balance.toFixed(2)}`;
    }
    set balance(amount){
        if(amount < 0){
            throw new Error("Balance cannot be negative");
        }
        this._balance=this._balance+amount;
    
    }
}

const account = new Account(100);
console.log(account.balance);
account.balance=-200;  // Throws an error
console.log(account.balance);
