function run(params) {
   let days= Number(params[0]);
   let kalories=0;
   let sumKM=0;
   let sumMin=0;

let kaloriiMin=400/20
let i=1;
while (i<=params.length-1) {

let min=Number(params[i]);
let distance=Number(params[++i]);
let string= params[++i];
if(string==="m"){
   distance=distance/1000
}
kalories=Number(kalories+(min*kaloriiMin));
sumKM+=distance;
sumMin+=min;

i++;
}


console.log(`He ran ${(sumKM).toFixed(2)}km for ${sumMin} minutes and burned ${kalories} calories.`);


}
run([2,
   20,
   2000,
  "m",
   20,
   2,
  "km"
   ])