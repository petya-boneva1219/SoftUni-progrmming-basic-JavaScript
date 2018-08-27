function zadacha(input) {
let priceTo= Number(input[0]);
let priceBack=Number(input[1]);
let priceOneGame=Number(input[2]);
let numberGames= Number(input[3]);
let discount= Number(input[4]);
let totalPriceFlight= 6*(priceTo+priceBack);

let afterDiscount= totalPriceFlight-(totalPriceFlight*(discount/100));
let totalMoneyForAllGames= 6*priceOneGame*numberGames;


let totalSum= afterDiscount+totalMoneyForAllGames;

let average= totalSum/6


console.log(`Total sum: ${totalSum.toFixed(2)} lv.`);
console.log(`Each friend has to pay ${average.toFixed(2)} lv.`);

   
}
zadacha([175,
280,
125,
5,
15
])