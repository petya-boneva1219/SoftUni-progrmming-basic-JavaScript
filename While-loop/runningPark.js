function run(params) {
   let dni= Number(params[0]);
   let kalorii=0;
   let obshtoKm=0;
   let obshtoMIn=0;

let kaloriiMin=400/20
let i=1;
while (i<=params.length-1) {

let min=Number(params[i]);
let distance=Number(params[++i]);
let string= params[++i];
if(string==="m"){
   distance=distance/1000
}
kalorii=Number(kalorii+(min*kaloriiMin));
obshtoKm+=distance;
obshtoMIn+=min;

i++;
}


console.log(`He ran ${(obshtoKm).toFixed(2)}km for ${obshtoMIn} minutes and burned ${kalorii} calories.`);


}
run([2,
   20,
   2000,
  "m",
   20,
   2,
  "km"
   ])