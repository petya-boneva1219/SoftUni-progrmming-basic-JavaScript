function komis(input) {
   let grad = input[0];
   let pari = Number(input[1]);
   let sum = 0

   if (grad === "Sofia") {
      if (pari >= 0 && pari <= 500) {
         sum = pari * 0.05
      } else if (pari > 500 && pari <= 1000) {
         sum = pari * 0.07
      } else if (pari > 1000 && pari <= 10000) {
         sum = pari * 0.08
      } else if (pari > 10000) {
         sum = pari * 0.12
      } else {
         console.log("error");

      }

   } else if (grad === "Varna") {
      if (pari >= 0 && pari <= 500) {
         sum = pari * 0.045
      } else if (pari > 500 && pari <= 1000) {
         sum = pari * 0.075
      } else if (pari > 1000 && pari <= 10000) {
         sum = pari * 0.1
      } else if (pari > 10000) {
         sum = pari * 0.13
      } else {
         console.log("error");

      }


   } else if (grad === "Plovdiv") {
      if (pari >= 0 && pari <= 500) {
         sum = pari * 0.055
      } else if (pari > 500 && pari <= 1000) {
         sum = pari * 0.08
      } else if (pari > 1000 && pari <= 10000) {
         sum = pari * 0.12
      } else if (pari > 10000) {
         sum = pari * 0.145
      } else {
         console.log("error");

      }
   } else {
      console.log("error");
   }
   console.log(sum.toFixed(2));
   
}
komis(["Sofia",
   -63
])