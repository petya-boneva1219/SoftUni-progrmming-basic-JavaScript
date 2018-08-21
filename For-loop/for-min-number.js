function num(input) {
  let broiChisla= Number(input[0]);
  let biggest= Number.MIN_SAFE_INTEGER;
  let smallest=Number.MAX_SAFE_INTEGER;

  for (let index = 1; index <= broiChisla; index++) {
     let chisloMasiv=Number(input[index]);
     if(chisloMasiv<smallest){
      smallest=chisloMasiv
     }
     
  }
console.log(`biggest is: ${smallest}`);


}
num([2,
  99,100
   ])