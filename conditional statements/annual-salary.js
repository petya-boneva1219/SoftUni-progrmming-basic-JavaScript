function ann(input) {
   let experience=Number(input[0]);
   let work= input[1];
   let total= 0;
   let final=0;

switch (work) {
   case "Game Designer": total=12*3600;
      break;
   case "C# Developer": total=12*5400;
   break;
   case "Java Developer": total= 12*5700;
   break;
   case  "Front-End Web Developer": total=12*4100;
   break;
   case "UX / UI Designer": total=12*3100;
   default:
   break;
   
}if (experience<=5) {
   final= total-(total*0.658);
}else{
   final=total;
}

 console.log(`Total earned money: ${final.toFixed(2)} BGN`);
 
}
ann([2,
   "Java Developer"
   
   ])