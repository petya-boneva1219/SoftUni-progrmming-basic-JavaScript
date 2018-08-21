function torta(input) {
  let width = Number(input[0]);
  let lenght = Number(input[1]);
  let i = 0;
  let broiParcheta = input[i];
  let area = width * lenght;
  let leftPeaces = 0;
  let masiv = (input.length) - 2
  let currentNumber = 0;

  while (i<=masiv -2) {
     currentNumber=input[i+2];

  if(area>=currentNumber){
    leftPeaces=area-currentNumber;
    area-=currentNumber;
  }else if(currentNumber>area){
    leftPeaces=area-currentNumber;
  }else if(currentNumber==="STOP"){
    break;
  }
  i++;

}
if(leftPeaces>=area){
  console.log(leftPeaces);
  
}else{
  console.log(`no more ${leftPeaces} more.`);
}

}
//torta([10, 10,20,20,20,20,21])
torta([10,
  2,
  2,
  4,
  6,
  "STOP"
  ])