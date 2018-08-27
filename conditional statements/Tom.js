function tom(input) {
   let daysForRest=Number(input[0]);
   let normaZaSpane= Number(30000);
 let workDays= 365-daysForRest;
 let minDaysForRest=127*daysForRest;
 let minDaysForwork= 63*workDays;
 let diff=normaZaSpane-(minDaysForRest+minDaysForwork);
 let hours= diff/60;
 let min= diff%60;

 if((minDaysForRest+minDaysForwork)<normaZaSpane){
    console.log("Tom sleeps well");
    console.log(` ${parseInt(hours)} hours and ${min} minutes less for play`);
    
 }else if((minDaysForRest+minDaysForwork)>normaZaSpane){
    console.log("Tom will run away");
    console.log(`${Math.abs(parseInt(hours))} hours and ${Math.abs(min)} minutes more for play`);
 }
 
}
tom([113])