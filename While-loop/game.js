function ffff(input) {
   let krai=Number(input[0]);
   let pari= Number(input[1]);

if(krai>7){
   console.log(`Sorry, you can't carry so many things!`);
   return;
}
let i=2;
while (pari>0) {
let element= input[i];

switch (element) {
   case "ak47" : pari-=2700;
 break;
 case "wp" : pari-=4750;
 break;
 case "sg553" : pari-=3500;
 break;
 case "grenade" : pari-=300;
 break;
 case "flash" : pari-=250;
 break;
 case "glock" : pari-=500;
 break;
 case "bazooka" : pari-=5600;
 break;
   default:
      break;
}

   i++
}
if(pari>=0){
   console.log(`You bought all ${krai} items! Get to work and defeat the bomb!`);
   
}else{
   console.log(`Not enough money! You need ${Math.abs(pari)} more money`);
   
}


}
ffff([3,
   4150,
   "sg553",
   "glock",
   "grenade"
   ])