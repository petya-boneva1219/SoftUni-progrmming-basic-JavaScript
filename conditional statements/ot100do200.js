function chisla(input) {
   let chislo=Number(input[0]);

   if(chislo<100){
      console.log("Less than 100");
   }else if(chislo>=100 && chislo<=200){
      console.log("Between 100 and 200");
      
   }else{
      console.log("Greater than 200");
      
   }
}
chisla([250])