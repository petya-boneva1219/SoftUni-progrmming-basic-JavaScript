function zadacha(input) {
   let otbor= input[0];
   let broimachove= Number(input[1]);
   let index= 2;
   let tochki=0;
   let goaldiff=0;

  
   for (let i = 1; i <=broimachove; i++){
      let vkarangol = Number(input[index])
    index++;
    let minusgol= Number(input[index])
    goaldiff+=vkarangol-minusgol
   if(vkarangol>minusgol){
tochki+=3
   }else if(vkarangol==minusgol){
      tochki+=1
   }else{
      tochki+=0
   }

    index++
   }
    if(goaldiff>=0){
       console.log(`${otbor} has finished the group phase with ${tochki} points.`);
       console.log(`Goal difference: ${goaldiff}.`);
       
    }else if(goaldiff<0){
       console.log(`${otbor} has been eliminated from the group phase.`);
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