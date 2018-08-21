function letter(input) {
   let str= input[0];
   let counter = 0;
 
   for (let i = 0; i <= str.length; i++) {
     let n= str[i]
   
     switch (n) {
       case "a": counter += 1;
         break;
       case "e": counter += 2
         break;
       case "i": counter += 3;
         break;
       case "o": counter += 4;
         break;
       case "u": counter += 5;
         break;
      
     }
  
   }
 
   console.log(counter);
 
 }
 letter(["hello"])

