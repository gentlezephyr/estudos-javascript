const number = Number(prompt("Write a number here: "));
const responseNumber = document.getElementById('num');
const squareRoot = document.getElementById('square-root');
const sameNumber = document.getElementById('sameNum');
const isNaN = document.getElementById('isNan');
const floorRound = document.getElementById('floorRound');
const floorCeil = document.getElementById('floorCeil');
const twoH = document.getElementById('twoH');
 
responseNumber.innerHTML = number;
squareRoot.innerHTML = number ** 0.5;
sameNumber.innerHTML = `${number} is integer: ${Number.isInteger(number)}`;
isNaN.innerHTML = `Is NaN: ${Number.isNaN(number)}`;
floorRound.innerHTML = `Round to floor ${Math.floor(number)}`;
floorCeil.innerHTML = `Round to ceil ${Math.ceil(number)}`;
twoH.innerHTML = `With two decimals: ${number.toFixed(2)}`;