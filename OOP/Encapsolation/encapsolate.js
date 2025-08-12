class BankAccount{

    #balance = 0;
   
    deposite(amount){
        this.#balance+=amount;

    }

    withdraw(amount){
        this.#balance-=amount;
    }

    getBalance(){
        return this.#balance;

    }

}

const bankAccount=new BankAccount();
bankAccount.deposite(1000);
bankAccount.withdraw(500);
console.log(bankAccount.getBalance());

