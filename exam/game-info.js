function zadacha(input) {
   let otbor= input[0];
   let broisreshti=Number(input[1]);   
   let obshtoMIN= 0;
   let produljeniq=0;
   let duzpi=0;
   let srednimin=0;
   for (let i = 2; i <= input.length-1; i++) {
     let element= Number(input[i])
     if(element>90&&element<=120){
        produljeniq++
     }else if(element>120){
        duzpi++
     }
     obshtoMIN+=element;
      
   }
  
   srednimin=obshtoMIN/broisreshti
   
   console.log(`${otbor} has played ${obshtoMIN} minutes. Average minutes per game: ${srednimin.toFixed(2)}`);
   console.log(`Games with penalties: ${duzpi}`);
   console.log(`Games with additional time: ${produljeniq}`);
   
   
   
      
   }
   zadacha(["England",
      3,
      95,
      115,
      123
      ])