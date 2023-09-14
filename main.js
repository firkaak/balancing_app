console.log("hello there")

class Balance {
    constructor(ammount) {
        this.ammount = ammount;
        this.currentBalance = 0;
    }
    income(x) {
        console.log(`my income is ${x}`);
        return this.currentBalance += x;
    }
    spending(x) {
        if (x < this.currentBalance) {
            console.log(`ich kaufe ein irgendwie for ${x}`);
            return this.currentBalance -= x;
        } else {
            console.log('du kannst das kaufen!!!')
        }
    }
}
// creating balance
const myBalance = new Balance(0);

const incBtn = document.getElementById('incomeBtn');
const spentBtn = document.getElementById('spentBtn');
const currBalance = document.getElementById('currBalance');
// adding income to balance
incBtn.onclick = () => {
    try {
        let ammount = Number(document.getElementById('ammount').value);
        myBalance.income(ammount);
        console.log(`my balance ist: ${myBalance.currentBalance}`);
        currBalance.innerHTML = myBalance.currentBalance;
        document.getElementById('ammount').value = 0;
    } catch (err) {
        console.log(err);
    }
}
// recording spending:
spentBtn.onclick = () => {
    try {
        let ammount = Number(document.getElementById('ammount').value);
        myBalance.spending(ammount);
        currBalance.innerHTML = myBalance.currentBalance;
        document.getElementById('ammount').value = 0;

    } catch (err) {
        console.log(err);
    }

}

console.log(myBalance.currentBalance);






