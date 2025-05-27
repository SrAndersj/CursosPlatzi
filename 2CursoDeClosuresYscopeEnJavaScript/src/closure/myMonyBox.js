//primero sin logica de closure

function myMonyBox(coins) {
  let saveCoins = 0;

  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

myMonyBox(10);
myMonyBox(20);

console.log("-----");

//la logica no recuerda el valor de saveCoins

//ahora con closure

function myMonyBoxClosure(coins) {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myBox = myMonyBoxClosure();
myBox(10);
myBox(20);

console.log("-----");

const moneyBoxAna = myMonyBoxClosure();
moneyBoxAna(20);
moneyBoxAna(20);
