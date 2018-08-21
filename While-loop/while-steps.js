function stupki(input) {
   let i=0;
   let comm=input[i];
   let sum=0;
   let req=10000;
   let chek= true;

while(sum<=req){

   if(comm==="Going home"){
      i++;
      comm=Number(input[i]);
      sum+=comm;
     if(sum>=req){
      console.log("Goal reached! Good job!");
      chek=false;
    }
     
   else{
       console.log(`${Math.abs(sum - req)} more steps to reach goal.`);
       chek=false;
    } break;
    
   } 
   
sum+=Number(comm)
i++;
comm=input[i];
}
     if(chek){
         console.log("Goal reached! Good job!");
     }

   
}
stupki([1500,
   300,
   2500,
   3000,
   "Going home",
   20000
   ])

