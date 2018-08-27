function credit(input) {

let n=Number(input[0]);
let grades=0;
let sumGrades=0;
let krediti1=0;
let final=0;
let sumKrediti=0;
let finalnaSumaKrediti=0;

for (let i = 1; i <= n; i++) {
   let num=input[i]
   grades=Number(num[2]);
   sumGrades += grades;
  krediti1=Number(num.slice(0, 2));


  if(grades==2){
    sumKrediti=krediti1-krediti1;
    }else if(grades==3){
      sumKrediti=(krediti1*0.5);
    }else if(grades==4){
    sumKrediti=(krediti1*0.7);
    }else if(grades==5){
       sumKrediti=(krediti1*0.85);
    }else{
       sumKrediti=krediti1;
    }
    
finalnaSumaKrediti+=sumKrediti;  
}
// console.log(sumGrades);
// console.log(sumKrediti);
let srednaOcenka=(sumGrades/n);
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