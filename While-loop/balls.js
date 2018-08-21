function balls(input) {
let counter=0;
   let krai= Number(input[0]);
   let sumred=0;
   let sumo=0;
   let diff=0;
   let sumy=0;let sumw=0;
   let sum=0;
let i=1;
   while (i<=krai) {
      let element= input[i];


      switch (element) {
         case "red": counter+=5;sumred+=1
            break;
            case "orange": counter+=10;sumo+=1
            break;
            case "yellow": counter+=15;sumy+=1
            break;
            case "white": counter+=20;sumw+=1
            break;
            case "black": counter= counter/2;
            sum+=1;
            break;
         default:diff+=1
            break;
      }
      i++;
      
   }

   console.log(`Total points: ${counter}`);
   console.log(`Points from red balls: ${sumred}`);
   console.log(`Points from orange balls: ${sumo}`);
   console.log(`Points from yellow balls: ${sumy}`);
   console.log(`Points from white balls: ${sumw}`);
   console.log(`Other colors picked: ${diff}`);
   console.log(`Divides from black balls: ${sum}`);
   
   
}
balls([3,
   "white",
   "black",
   "pink"
   ])