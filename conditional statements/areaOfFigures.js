function lica(input) {
   let figura=input[0];
   let stranaIliRadius=Number(input[1]);
   let strana=Number(input[2]);
   let lice=0

   if(figura==="square"){
lice= stranaIliRadius*stranaIliRadius
   }else if(figura==="rectangle"){
      lice=stranaIliRadius*strana
   }else if(figura==="circle"){
      lice=Math.PI*Math.pow(stranaIliRadius,2)
   }else if(figura==="triangle"){
      lice=(stranaIliRadius*strana)/2}
   
   console.log(lice.toFixed(3));
   
}
lica(["circle",
   6
   ])