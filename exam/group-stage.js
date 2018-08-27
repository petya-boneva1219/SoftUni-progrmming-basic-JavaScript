function zadacha(input) {
   let team= input[0];
   let numGames= Number(input[1]);
   let index= 2;
   let points=0;
   let goaldiff=0;

  
   for (let i = 1; i <=numGames; i++){
      let vkarangol = Number(input[index])
    index++;
    let minusgol= Number(input[index])
    goaldiff+=vkarangol-minusgol
   if(vkarangol>minusgol){
points+=3
   }else if(vkarangol==minusgol){
      points+=1
   }else{
      points+=0
   }

    index++
   }
    if(goaldiff>=0){
       console.log(`${team} has finished the group phase with ${points} points.`);
       console.log(`Goal difference: ${goaldiff}.`);
       
    }else if(goaldiff<0){
       console.log(`${team} has been eliminated from the group phase.`);
       console.log(`Goal difference: ${goaldiff}.`);
          
    }
   
      
   }
   zadacha(["Brazil",
      3,
      4,
      2,
      0,
      0,
      1,
      1
      ])