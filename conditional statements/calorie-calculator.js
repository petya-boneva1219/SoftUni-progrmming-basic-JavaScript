function calori(input) {
   let pol=input[0];
   let tegloKG=Number(input[1]);
   let visokMETRI=Number(input[2]*100);
   let vuzrast= Number(input[3]);
   let nivoAKTOVNOST=(input[4]);
   let bnm=0;
   let calories=0;

   if(pol === "m"){
 bnm= 66 + (13.7*tegloKG) + (5*visokMETRI) - (6.8*vuzrast);
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
   }else if(pol==="f"){
      bnm= 655 + (9.6*tegloKG) + (1.8*visokMETRI) - (4.7*vuzrast);
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