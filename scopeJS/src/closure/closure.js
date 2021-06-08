const moneyBox = (coins) => {
    var savecoins = 0;
    savecoins += coins;
    console.log(`moneyBox: $${savecoins}`)
}

moneyBox(5);
moneyBox(10);

//closure: combinando una función y el ámbito donde se declara 
const moneyBox = () => {
    var savecoins = 0;

    const countCoins = (coins) =>{
        savecoins += coins;
        console.log(`moneyBox: $${savecoins}`)
    }
    return countCoins;
    
}

let myMoneyBox = moneyBox();
myMoneyBox(4); //4
myMoneyBox(6); //10
myMoneyBox(10); //20