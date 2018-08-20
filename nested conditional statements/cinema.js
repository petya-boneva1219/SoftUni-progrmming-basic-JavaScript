function kino(input) {
   let prem=input[0];
   let r=Number(input[1]);
   let c=Number(input[2]);
   let sum=0
   switch(prem){
      case "Premiere": console.log((r*c*12.00).toFixed(2));
      break;
      case "Normal":console.log((r*c*7.5).toFixed(2));
      break;
      case "Discount":console.log((r*c*5.00).toFixed(2));
      default:console.log("error");
      break;
      
   }
   
}
kino(["Premiere",
   10,
   12
   ])