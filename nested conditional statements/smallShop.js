function shop(input) {
   let produkt=input[0];
   let city=input[1];
   let kolich=Number(input[2]);
   let sum=0;

if(city==="Sofia"){
   if(produkt==="coffee"){
      sum=kolich*0.5
   }else if(produkt==="water"){
      sum=kolich*0.8
   }else if(produkt==="beer"){
      sum=kolich*1.2
   }else if(produkt==="sweets"){
      sum=kolich*1.45
   }else{
      sum=kolich*1.6
   }
}else if(city==="Plovdiv"){
   if(produkt==="coffee"){
      sum=kolich*0.4
   }else if(produkt==="water"){
      sum=kolich*0.7
   }else if(produkt==="beer"){
      sum=kolich*1.15
   }else if(produkt==="sweets"){
      sum=kolich*1.30
   }else{
      sum=kolich*1.50
   }

}else if(city==="Varna"){
   if(produkt==="coffee"){
      sum=kolich*0.45
   }else if(produkt==="water"){
      sum=kolich*0.7
   }else if(produkt==="beer"){
      sum=kolich*1.1
   }else if(produkt==="sweets"){
      sum=kolich*1.35
   }else{
      sum=kolich*1.55
   }

}
console.log(sum);

}
shop(["coffee",
   "Varna",
   2
   ])