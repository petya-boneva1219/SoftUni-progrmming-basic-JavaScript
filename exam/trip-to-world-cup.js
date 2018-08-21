function zadacha(input) {
let biletotivane= Number(input[0]);
let biletVrushtane=Number(input[1]);
let cenaBiletZaEdinmach=Number(input[2]);
let broimachove= Number(input[3]);
let otstupka= Number(input[4]);
let samoleti= 6*(biletotivane+biletVrushtane);

let sledotstupka= samoleti-(samoleti*(otstupka/100));
let obshobiletizamachove= 6*cenaBiletZaEdinmach*broimachove;


let obshtasuma= sledotstupka+obshobiletizamachove;

let sredno= obshtasuma/6


console.log(`Total sum: ${obshtasuma.toFixed(2)} lv.`);
console.log(`Each friend has to pay ${sredno.toFixed(2)} lv.`);

   
}
zadacha([175,
280,
125,
5,
15
])