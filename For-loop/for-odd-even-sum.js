function suma(input) {
   let n = Number(input[0]);
   let nechetni = 0;
   let chetni =0;
   let sumEven=0;
   let sumOdd=0;

   for (let i = 1; i <= n; i++) {
      let currentNuber=Number(input[i]);
    if(i%2==0){
       sumEven+=currentNuber;

    }else{
       sumOdd+=currentNuber
   }
   
   }
   if(sumOdd===sumEven){
      console.log(`Yes`);
      console.log(` Sum = ${sumEven}`);
      
     
        
   }else{
      console.log("No");    
      console.log(` Diff = ${Math.abs(sumOdd-sumEven)}` );
        
   }

}
suma([4,
   10,
   50,
   60,
   20
])