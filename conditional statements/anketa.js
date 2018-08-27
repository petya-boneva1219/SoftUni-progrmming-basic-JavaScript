function pool(params) {
   let numberOfParticipants= Number(params[0]);
   let voteforFirst= Number(params[1]);

   let secondLanguage= voteforFirst- voteforFirst*0.2
   let thirdLanguage= secondLanguage- secondLanguage*0.1
   let sum= voteforFirst+secondLanguage+thirdLanguage;

  
   if(sum>=(numberOfParticipants/2)){
      console.log(`First three languages have ${Math.abs(Math.round(sum-(numberOfParticipants/2)))} votes more`);
      
   }else if(sum<(numberOfParticipants/2)){
      console.log(`First three languages have ${Math.abs(Math.round(sum-(numberOfParticipants/2)))} votes less of half votes`);
      
   }
   
   
   
}
pool([400,
   201
   ])