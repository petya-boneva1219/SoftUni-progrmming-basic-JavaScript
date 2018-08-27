function num(input) {
   let n= Number(input[0]);
   let biggest= Number.MIN_SAFE_INTEGER;
   let smallest=Number.MAX_SAFE_INTEGER;

   for (let index = 1; index <= n; index++) {
      let element=Number(input[index]);
      if(element>biggest){
         biggest=element
      }
      
   }
console.log(`biggest is: ${biggest}`);


}
num([2,
  99,
  100
   ])
