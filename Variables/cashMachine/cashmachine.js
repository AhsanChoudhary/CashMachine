let userPin = 1234;
let attemptCounter = 0;
let withdrawLimit = 250;
let accountBalance = 1000;
 

const pinValidation = () => {
    let enteredPIN = prompt("Welcome to the bank. Please enter your PIN.");
    if (userPin == enteredPIN) {
        alert('Correct PIN. Click OK.');
        withdrawMoney();
    } else {
        prompt('Wrong PIN. Please enter PIN again.')
        attemptCounter++;
        prompt('you have 2 tries left')
    }
}

const withdrawMoney = () => {
    let amountEntered = prompt("How much would you like to withdraw?");
    if (amountEntered <= withdrawLimit) {
        accountBalance = accountBalance - amountEntered;
        alert(`Your new balance is ${accountBalance}.`);
    } else {
        prompt('Amount entered is above the withdraw limit on your account. Please enter a value below £250.');
        withdrawMoney();
    }
}

pinValidation();
console.log(attemptCounter);




