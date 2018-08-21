function zadacha(input) {
   let number= Number(input[0]);
  let counter=0;

   for (let i = 66; i <= 76; i+=2) {
      for (let j = 102; j >= 97; j--) {
         for (let k = 65; k <=67; k++) {
          for (let l = 1; l <=10; l++) {
             for (let m = 10; m >=1; m--) {
                counter++;
                let bukva1=String.fromCharCode(i);
                let bukva2=String.fromCharCode(j);
                let bukva3=String.fromCharCode(k);
              if(counter===number){
              console.log(`Ticket combination: ${bukva1}${bukva2}${bukva3}${l}${m}`);
              console.log(`Prize: ${i+j+k+l+m} lv.`);
              
              }
      
               }
               
      
            }
            
         }
         
      
      }
      
   }
      
   }
   zadacha([17])