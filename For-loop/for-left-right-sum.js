function num(input) {
   let n=Number(input[0]);
  
   let leftSum=0
   let rightSum=0;

    for (let index = 1; index <= n; index++) {
      leftSum = leftSum+Number(input[index]);
      rightSum=rightSum+Number(input[index+n]);

    }
  
   if(leftSum===rightSum){
      console.log(`Yes, sum = ${leftSum}`);
      
   }else{
      console.log(`No, diff = ${Math.abs(leftSum-rightSum)}`);
      
   }
  

}
num([2,
   10,
   90,
   60,
   40
   ])