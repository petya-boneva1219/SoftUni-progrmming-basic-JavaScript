function edinici(input) {
   let num=Number(input[0]);
   let from=input[1];
   let to=input[2];
   let toMeter=0;
   let finalConvert=0;

   if( from ==="mm"){
      toMeter= num/1000
   }else if(from==="cm"){
      toMeter=num/100
   }else if(from==="mi"){
      toMeter=num/0.000621371192
   }else if(from==="in"){
      toMeter=num/39.3700787 
   }else if( from==="km"){
      toMeter=num/0.001 
   }else if( from==="ft"){
      toMeter=num/3.2808399 
   }else if(from ==="yd"){
      toMeter=num/1.0936133 
   }else{
      toMeter=num
   }
   if(to==="mm"){
      finalConvert=toMeter*1000
   }else if(to==="cm"){
      finalConvert=toMeter*100
   }else if(to==="mi"){
      finalConvert=toMeter*0.000621371192 
   }else if(to==="in"){
      finalConvert=toMeter*39.3700787 
   }else if(to==="km"){
      finalConvert=toMeter*0.001 
   }else if(to==="ft"){
      finalConvert=toMeter*3.2808399 
   }else if(to==="yd"){
      finalConvert=toMeter*1.0936133 
   }else{
      finalConvert=toMeter
   }
   console.log(`${finalConvert.toFixed(8)} ${to}`);
   
}
edinici([12,"km","ft"])