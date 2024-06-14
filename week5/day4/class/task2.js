class BankAccount {
    #accountnumber;
    #accountholdername;
    #balance;

    constructor(accountNumber, accountHolderName, initialBalance) {
        this.#accountnumber = accountNumber;
        this.#accountholdername = accountHolderName;
        this.#balance = initialBalance;
    }

    get accountNumber() {
        return this.#accountnumber;
    }

    set accountNumber(accountNumber) {
        this.#accountnumber = accountNumber;
    }

    get accountHolderName() {
        return this.#accountholdername;
    }

    set accountHolderName(accountHolderName) {
        this.#accountholdername = accountHolderName;
    }

    get balance() {
        return this.#balance;
    }

    set balance(balance) {
        this.#balance = balance;
    }
}


class Card extends BankAccount {

    #cardnumber;
    constructor(accountNumber, accountHolderName, initialBalance, cardnumber) {
        super(accountNumber, accountHolderName, initialBalance);
        this.cardnumber = cardnumber;
    }

    get cardnumber() {
        return this.#cardnumber;
    }

    set cardnumber(cardnumber) {
        this.#cardnumber = cardnumber;
    }

    deposit(amount) {
        if (amount < 0) {
            throw new Error("Deposit must be possitive");
        }
        let balance = this.balance;
        balance += amount;
        this.balance = balance;
    }

    withdraw(amount) {
        let balance = this.balance;
        if (amount < 0 && balance < amount) {
            throw new Error("Error occured");
        }
        balance -= amount;
        this.balance = balance;
    }

    show() {
        console.log(this.balance)
    }

    transfer(card, amount) {
        this.withdraw(amount);
        card.deposit(amount);
    }
}


// function Transfer(card1, card2, amount) {
//     card1.withdraw(amount);
//     card2.deposit(amount)
// }

const card1 = new Card(123123123123123, "Ibrahim", 500, 76324986312559876435);
const card2 = new Card(328648732648732, "Ibrahim", 400, 234324324324324324324);

card1.show()
card2.show()
card1.transfer(card2, 100)
card1.show()
card2.show()

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

card1.show()
card1.withdraw(4000)
card1.show()

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

card1.deposit()
card1.withdraw(4000)
card1.deposit()
