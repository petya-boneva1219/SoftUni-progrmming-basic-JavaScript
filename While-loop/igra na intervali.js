function igra(input) {
   let interval= Number(input[0]);
   let suma=0;
let i=1;
let counter1=0;
let counter2=0;
let counter3=0;
let counter4=0;
let counter5=0;
let counter6=0;
let store=0;
//let num=23;
//console.log(num*0.4);

while(i<=interval){
   let element=Number(input[i])
 if(element>=0 && element<=9){
    suma+=element*0.2;
    counter1++
 }else if(element>=10 && element<=19){
    suma+=element*0.3;
    counter2++
 }else if(element>=20 && element<=29){
    suma+= element*0.4;
    counter3++
 }else if(element>=30 && element<=39){
    suma+=50
    counter4++
 } else if(element>=40 && element<= 50){
    suma+=100;
    counter5++
 }else{
    counter6++;
    suma=suma/2
 }

    i++;
 }
 
 let sumacounter= counter1+counter2+counter3+counter4+counter5+counter6

console.log(suma.toFixed(2));
console.log(`From 0 to 9: ${(counter1/sumacounter*100).toFixed(2)}%`);
console.log(`From 10 to 19: ${(counter2/sumacounter*100).toFixed(2)}%`);
console.log(`From 20 to 29: ${(counter3/sumacounter*100).toFixed(2)}%`);
console.log(`From 30 to 39: ${(counter4/sumacounter*100).toFixed(2)}%`);
console.log(`From 40 to 50: ${(counter5/sumacounter*100).toFixed(2)}%`);
console.log(`Invalid numbers: ${(counter6/sumacounter*100).toFixed(2)}%`);

}
igra([3,
   12,
   -23,
   46
   ])