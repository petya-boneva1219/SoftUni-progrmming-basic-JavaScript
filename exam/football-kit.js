function zadacha(input) {
   let priceTshirt= Number(input[0]);
   let goal= Number(input[1]);
   let priceShorti= priceTshirt*0.75;
   let priceSocks= priceShorti*0.2;
   let priceShoes= (priceTshirt+priceShorti)*2;
   let sum= priceTshirt+priceShorti+priceSocks+priceShoes;

   let totalPrice= (sum-(sum*0.15)).toFixed(2);

   if(totalPrice>= goal){
      console.log(`Yes, he will earn the world-cup replica ball!`);
      console.log(`His sum is ${totalPrice} lv.`);
      
   }else{
       console.log(`No, he will not earn the world-cup replica ball.`);
       console.log(`He needs ${(goal-totalPrice).toFixed(2)} lv. more.`);  
   
   }
  
   
      
   }
   zadacha([25,100])