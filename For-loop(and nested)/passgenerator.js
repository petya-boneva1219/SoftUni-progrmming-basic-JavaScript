function pass(input) {

let fi=Number(input[0]);
let lett1= input[1];
let lett2=input[2];
let secNumber=Number(input[3]);
let thirdNumber=Number(input[4]);
let fourthNumber=Number(input[5]);
let final=Number(input[6]);
let counter=0;

for (let a = 1; a <=fi; a++) {
   for (let b = 65; b <= 90; b++) {
      for (let c = 97; c <=122; c++) {
         for (let d = 1; d <=secNumber; d++) {
            for (let e = 1; e <=thirdNumber; e++) {
               for (let f = 1; f <=fourthNumber; f++) {
                  for (let g = 1; g <=final; g++) {
                  
                  
                  if(counter === final){
                  let letter=String.fromCharCode(b).toUpperCase();
                  let letter2=String.fromCharCode(c).toLowerCase();
                     console.log(`${a}${letter}${letter2}${d}${e}${f}`);
                   
                  }
                  counter++;
               }
   
            }
   
         }
   
      }
   
   }
   
}

}

console.log(`No password on this position`);

}
pass([6,
   "f",
   "l",
   9,
   33,
   88,
   22482
   ])