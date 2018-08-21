function zadacha(input) {
   let cenateniska= Number(input[0]);
   let krainacel= Number(input[1]);
   let cenashorti= cenateniska*0.75;
   let cenachorapi= cenashorti*0.2;
   let cenabutonki= (cenateniska+cenashorti)*2;
   let obshto= cenateniska+cenashorti+cenachorapi+cenabutonki;

   let krai= (obshto-(obshto*0.15)).toFixed(2);

   if(krai>= krainacel){
      console.log(`Yes, he will earn the world-cup replica ball!`);
      console.log(`His sum is ${krai} lv.`);
      
   }else{
       console.log(`No, he will not earn the world-cup replica ball.`);
       console.log(`He needs ${(krainacel-krai).toFixed(2)} lv. more.`);  
   
   }
  
   
      
   }
   zadacha([25,100])