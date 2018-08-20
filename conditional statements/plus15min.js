// function min(input) {
//    let chas=Number(input[0]);
//    let minuti=Number(input[1]);
//    let sumMin=minuti+15;
   
//    if(sumMin>=60){
//       minuti= sumMin- 60;
//       chas+=1
//    }else if(sumMin<60)
//    if(chas>23){
//       chas-=24
//    }
//    if(minuti<10){
// minuti="0"+minuti
//    }
// console.log(`${chas}:${minuti}`);


// }
// min([12,
//    49
    
//    ])
   function solve(input){
      let h = Number(input[0]);
      let min = Number(input[1]);
   
      let sumOfMin = min + 15;
   
      if(sumOfMin >= 60){
          h += 1;
          min = sumOfMin - 60
      }else if (sumOfMin < 60){
          min = totalM;
      }
   
      if(min< 10){
          min = "0" + min;
      }
   
      if(h > 23){
          h -= 24
      }
   
      console.log(`${h}:${min}`)
  }
  solve([12,
       49
       
    ])