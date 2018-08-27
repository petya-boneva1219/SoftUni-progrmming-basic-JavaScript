function calori(input) {
   let gender=input[0];
   let weight=Number(input[1]);
   let height=Number(input[2]*100);
   let age= Number(input[3]);
   let nivoAKTOVNOST=(input[4]);
   let bnm=0;
   let calories=0;

   if(gender === "m"){
 bnm= 66 + (13.7*weight) + (5*height) - (6.8*age);
 switch (nivoAKTOVNOST){
    case "sedentary": calories=bnm*1.2;
    break;
    case "lightly active":calories= bnm*1.375;
    break;
    case "moderately active":calories= bnm*1.55;
    break;
    case "very active":calories= bnm*1.725;
    break;
    default:console.log("no");
    break;
    
 }
   }else if(gender==="f"){
      bnm= 655 + (9.6*weight) + (1.8*height) - (4.7*age);
      switch (nivoAKTOVNOST){
         case "sedentary":calories= bnm*1.2;
         break;
         case "lightly active":calories= bnm*1.375;
         break;
         case "moderately active":calories= bnm*1.55;
         break;
         case "very active":calories= bnm*1.725;
         break;
         default:console.log("no");
         break;
         
      }
   }

console.log(`To maintain your current weight you will need ${Math.ceil(calories)} calories per day.`);

}
calori(["f",
   57,
   1.70,
   28,
   "lightly active"
   ])