function zadacha(input) {


   let minuti = Number(input[0]);
   let igrach = input[1];

 
   
      if (minuti > 0 && minuti <= 10) {
         console.log(`First half time.`);
         console.log(`${igrach} missed a penalty.`);
         if (minuti % 2 === 0) {
            console.log(`${igrach} was injured after the penalty.`);
         }
      } else if (minuti > 10 && minuti <= 35) {
         console.log(`First half time.`);

         console.log(`${igrach} received yellow card.`);
         if (minuti % 2 != 0) {
            console.log(`${igrach} got another yellow card.`);

         }
      } if (minuti > 35 && minuti <= 44) {
         console.log(`First half time.`);
         console.log(`${igrach} SCORED A GOAL !!!`);
      }
      else if (minuti >= 45 && minuti <= 55) {
         console.log(`Second half time.`);
         console.log(`${igrach} got a freekick.`);
         if (minuti % 2 === 0) {
            console.log(`${igrach} missed the freekick.`);

         }
      } else if (minuti > 55 && minuti <= 80) {
         console.log(`Second half time.`);
         console.log(`${igrach} missed a shot from corner.`);
         if (minuti % 2 != 0) {
            console.log(`${igrach} has been changed with another player.`);

         }
      } else if (minuti > 80 && minuti <= 90) {
         console.log(`Second half time.`);
         console.log(`${igrach} SCORED A GOAL FROM PENALTY !!!`);

      }else if(minuti==0){
         
            console.log(`Match has just began!`);
      }

   }
zadacha([85,
   "Harry Kane"
   ])