function secundi(input) {
   let a=Number(input[0]);
   let b=Number(input[1]);
   let c=Number(input[2]);

   let sum=a+b+c;
   if(sum<59){
      if(sum<=10){
         console.log("0:0"+sum); 
      }else{
         console.log("0:"+sum);
      }
   }else if(sum>=60 && sum<=119){
      if(sum-60<10){
         console.log("1:0"+(sum-60));
      }else{
         console.log("1:"+(sum-60));
      }
   }else if(sum<=179){
      if(sum-120<10){
         console.log("2:0"+(sum-120));
      }else{
         console.log("2:"+(sum-120)); 
      }
   }
   
}
secundi(["22","7","34"])