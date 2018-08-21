function solve(args) {
let smallest=Number.MAX_SAFE_INTEGER;
let biggest= Number.MIN_SAFE_INTEGER;
let i =0;
 let command = args[i];


while(true){
  
   if(command==="END"){
     break;
   }if(command<smallest){
   smallest=command;
   }if(command>biggest){
     biggest=command;
   }
  
   i++;
   command=args[i];
}
console.log(`Max number: ${Number(biggest)}`)
   console.log(`Min number: ${Number(smallest)}`);
    

}
solve([250,
  5,
  2,
  0,
  100,
  1000,
  "END"
  ])