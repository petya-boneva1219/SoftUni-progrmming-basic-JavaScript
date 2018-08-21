function smetka(input) {
   let broiVnoski= Number(input[0]);
   let i=1;
   let vnoska=Number(input[i]);
let suma=0
let stupka=1
while(stupka<=broiVnoski){
   if(vnoska<0){
      console.log("Invalid operation!");
      break;
   }
   suma+=vnoska;
   console.log(`Your account balance was increased by: ${vnoska.toFixed(2)} `);
   stupka++;
   i++;
   vnoska=Number(input[i]);
   
}
console.log(`Total balance: ${suma.toFixed(2)}`);
}
smetka([3,
   5.51,
   69.42,
   100
   
   ])