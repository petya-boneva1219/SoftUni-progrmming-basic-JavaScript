function zadacha(input) {


   let min = Number(input[0]);
   let player = input[1];

 
   
      if (min > 0 && min <= 10) {
         console.log(`First half time.`);
         console.log(`${player} missed a penalty.`);
         if (min % 2 === 0) {
            console.log(`${player} was injured after the penalty.`);
         }
      } else if (min > 10 && min <= 35) {
         console.log(`First half time.`);

         console.log(`${player} received yellow card.`);
         if (min % 2 != 0) {
            console.log(`${player} got another yellow card.`);

         }
      } if (min > 35 && min <= 44) {
         console.log(`First half time.`);
         console.log(`${player} SCORED A GOAL !!!`);
      }
      else if (min >= 45 && min <= 55) {
         console.log(`Second half time.`);
         console.log(`${player} got a freekick.`);
         if (min % 2 === 0) {
            console.log(`${player} missed the freekick.`);

         }
      } else if (min > 55 && min <= 80) {
         console.log(`Second half time.`);
         console.log(`${player} missed a shot from corner.`);
         if (min % 2 != 0) {
            console.log(`${player} has been changed with another player.`);

         }
      } else if (min > 80 && min <= 90) {
         console.log(`Second half time.`);
         console.log(`${player} SCORED A GOAL FROM PENALTY !!!`);

      }else if(min==0){
         
            console.log(`Match has just began!`);
      }

   }
zadacha([85,
   "Harry Kane"
   ])