function credit(input) {

let duljina=Number(input[0]);
let ocenki=0;
let sumaOcenki=0;
let krediti1=0;
let final=0;
let sumKrediti=0;
let finalnaSumaKrediti=0;

for (let i = 1; i <= duljina; i++) {
   let num=input[i]
   ocenki=Number(num[2]);
   sumaOcenki += ocenki;
  krediti1=Number(num.slice(0, 2));


  if(ocenki==2){
    sumKrediti=krediti1-krediti1;
    }else if(ocenki==3){
      sumKrediti=(krediti1*0.5);
    }else if(ocenki==4){
    sumKrediti=(krediti1*0.7);
    }else if(ocenki==5){
       sumKrediti=(krediti1*0.85);
    }else{
       sumKrediti=krediti1;
    }
    
finalnaSumaKrediti+=sumKrediti;
 
   
}
// console.log(sumaOcenki);
// console.log(sumKrediti);


let srednaOcenka=(sumaOcenki/duljina);
// console.log(srednaOcenka);


 console.log(finalnaSumaKrediti.toFixed(2));
console.log(srednaOcenka.toFixed(2));


}
credit([2,
  "204",
  "206",
  // "202",
  // "214",
  // "185"
  
  
])