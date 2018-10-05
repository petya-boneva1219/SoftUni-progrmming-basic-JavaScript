function voda(input) {
   let volume=Number(input[0]);
   let sumaMl=0
   let i=1
   let button=input[i]; 
   let stupka=1
   let duljinaMasiv= (input.length)-1;
   
   while(stupka<=duljinaMasiv){
      
      if(button==="Hard"){
         sumaMl+=200
      }else if(button==="Medium"){
         sumaMl+=100
      }else if(button==="Easy"){
         sumaMl+=50
      }
      if(sumaMl==volume){
         console.log(`The dispenser has been tapped ${stupka} times.`);
         break;  
      }
      if(sumaMl>obem){
         console.log(`${Math.abs(volume-sumaMl)}ml has been spilled.`);
         break;   
      }
      stupka++;
      i++;
      button=input[i]
   }
   
       
}
voda([500,
   "Hard",
   "Medium",
   "Easy",
   "Easy",
   "Medium",
   ])