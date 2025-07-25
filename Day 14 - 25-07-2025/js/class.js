class BankAccount{
    static accountsCounter = 0
    #balance 
    constructor(firstName,lastName,address,email, balance){
       this.fullName = `${firstName} ${lastName}`
       this.address = [address]
       this.#balance = balance || 5000
       this.email = email

       BankAccount.accountsCounter ++

    //    console.log(`${this.fullName} account created.`);
    //    console.log(this);
            
    }

    setBalance (val){
        this.#balance= val
    }

    getBalance (){
        return this.#balance
    }

    checkBalance(){
        return this.#balance
    }

    deposite (amount){
        if (amount % 50 != 0){
            console.log('the amount must be mutliple of 50');
            
        }else if (amount > 20000){
            console.log('the max deposite amount is 20000');
            
        }else if (amount < 50){
            console.log('the minimum amout to deposite is 50');
            
        }
        else{
            this.#balance += amount
        }

        return this.#balance

    }

    withdraw(amount){
        if (amount > this.balance){
            console.log('insufficent balance!');
        }else if (amount %50 !=0 ){
            console.log('the withdraw amount must be multiple of 50');
            
        }else if (amount > 12000){
            console.log('the max amount to withdraw is 12000');
            
        }else {
            this.#balance -= amount;
        }

        return this.#balance

    }

    static getAccountsCounter(){
        return BankAccount.accountsCounter
    }

}




const account1 = new BankAccount('ahmed', 'aymen', "MNF", 'a@a.com');
const account2 = new BankAccount('ali', 'aymen', "MNF", 'a@a.com' , 6000);
const account3 = new BankAccount('laila', 'aymen', "MNF", 'a@a.com');
const account4 = new BankAccount('sara', 'aymen', "MNF", 'a@a.com', 9000);
const account5 = new BankAccount('omar', 'aymen', "MNF", 'a@a.com', 50000);
const account6 = new BankAccount('amgad', 'aymen', "MNF", 'a@a.com');
const account7 = new BankAccount('asia', 'aymen', "MNF", 'a@a.com');

// console.log(account1.#balance); //set and get


console.log(this);

const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    console.log(this);
    
})
document.addEventListener('click', function(){
    console.log(this);
    
})



