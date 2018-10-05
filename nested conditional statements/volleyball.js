function volei(input) {
   let year=input[0];
let holidays=Number(input[1]);
let trip=Number(input[2]);
let numHolidays=48-trip;
let igraUikends=(numHolidays*(3/4));
let gamesHolidays=(holidays*(2/3));
let suma=0;

if (year==="leap") {
   suma=(igraUikends+gamesHolidays+trip)*1.15
}else if(year==="normal"){
   suma=(igraUikends+gamesHolidays+trip)
}
console.log(Math.floor(suma));



}
volei(["normal",
   3,
   2])