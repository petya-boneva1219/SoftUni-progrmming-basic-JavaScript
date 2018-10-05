function ffff(input) {
   let items=Number(input[0]);
   let money= Number(input[1]);

if(items>7){
   console.log(`Sorry, you can't carry so many things!`);
   return;
}
let i=2;
while (money>0) {
let element= input[i];

switch (element) {
   case "ak47" : money-=2700;
 break;
 case "wp" : money-=4750;
 break;
 case "sg553" : money-=3500;
 break;
 case "grenade" : money-=300;
 break;
 case "flash" : money-=250;
 break;
 case "glock" : money-=500;
 break;
 case "bazooka" : money-=5600;
 break;
   default:
      break;
}

   i++
}
if(money>=0){
   console.log(`You bought all ${items} items! Get to work and defeat the bomb!`);
   
}else{
   console.log(`Not enough money! You need ${Math.abs(money)} more money`);
   
}


}
ffff([3,
   4150,
   "sg553",
   "glock",
   "grenade"
   ])