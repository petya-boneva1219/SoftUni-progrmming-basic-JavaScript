function ann(input) {
   let opit=Number(input[0]);
   let profesiq= input[1];
   let obshto= 0;
   let nnn=0;

switch (profesiq) {
   case "Game Designer": obshto=12*3600;
      break;
   case "C# Developer": obshto=12*5400;
   break;
   case "Java Developer": obshto= 12*5700;
   break;
   case  "Front-End Web Developer": obshto=12*4100;
   break;
   case "UX / UI Designer": obshto=12*3100;
   default:
   break;
   
}if (opit<=5) {
   nnn= obshto-(obshto*0.658);
}else{
   nnn=obshto;
}

 console.log(`Total earned money: ${nnn.toFixed(2)} BGN`);
 
}
ann([2,
   "Java Developer"
   
   ])