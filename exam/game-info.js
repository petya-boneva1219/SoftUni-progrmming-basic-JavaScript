function zadacha(input) {
   let team= input[0];
   let numGames=Number(input[1]);   
   let sumOfMin= 0;
   let additionalTime=0;
   let penalties=0;
   let averageMin=0;
   for (let i = 2; i <= input.length-1; i++) {
     let element= Number(input[i])
     if(element>90&&element<=120){
      additionalTime++
     }else if(element>120){
      penalties++
     }
     sumOfMin+=element;
      
   }
  
   averageMin=sumOfMin/numGames
   
   console.log(`${team} has played ${sumOfMin} minutes. Average minutes per game: ${averageMin.toFixed(2)}`);
   console.log(`Games with penalties: ${penalties}`);
   console.log(`Games with additional time: ${additionalTime}`);
   
   
   
      
   }
   zadacha(["England",
      3,
      95,
      115,
      123
      ])