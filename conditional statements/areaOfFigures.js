function lica(input) {
   let figure=input[0];
   let sideOrRadius=Number(input[1]);
   let side=Number(input[2]);
   let area=0

   if(figure==="square"){
area= sideOrRadius*sideOrRadius
   }else if(figure==="rectangle"){
      area=sideOrRadius*side
   }else if(figure==="circle"){
      area=Math.PI*Math.pow(sideOrRadius,2)
   }else if(figure==="triangle"){
      area=(sideOrRadius*side)/2}
   
   console.log(area.toFixed(3));
   
}
lica(["circle",
   6
   ])