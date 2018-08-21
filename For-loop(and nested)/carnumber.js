function car(input) {
   let first=Number(input[0]);
   let second= Number(input[1]);
let sum=""

for (let a = first; a <= second; a++) {
   for (let b = first; b <= second; b++) {
      for (let c = first; c <= second; c++) {
         for (let d = first; d<=second; d++) {
         
         if(a%2==0 && d%2!=0 || a%2!=0 && d%2==0){
            if(a>d && (b+c)%2==0){
             sum += `${a}${b}${c}${d} `;
            }
         }
         
         }
      }
   }
   
}
console.log(sum);


}
car([2,3])