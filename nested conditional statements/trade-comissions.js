function komis(input) {
   let city = input[0];
   let money = Number(input[1]);
   let sum = 0

   if (city === "Sofia") {
      if (money >= 0 && money <= 500) {
         sum = money * 0.05
      } else if (money > 500 && money <= 1000) {
         sum = money * 0.07
      } else if (money > 1000 && money <= 10000) {
         sum = money * 0.08
      } else if (money > 10000) {
         sum = money * 0.12
      } else {
         console.log("error");

      }

   } else if (city === "Varna") {
      if (money >= 0 && money <= 500) {
         sum = money * 0.045
      } else if (money > 500 && money <= 1000) {
         sum = money * 0.075
      } else if (money > 1000 && money <= 10000) {
         sum = money * 0.1
      } else if (money > 10000) {
         sum = money * 0.13
      } else {
         console.log("error");

      }


   } else if (city === "Plovdiv") {
      if (money >= 0 && money <= 500) {
         sum = money * 0.055
      } else if (money > 500 && money <= 1000) {
         sum = money * 0.08
      } else if (money > 1000 && money <= 10000) {
         sum = money * 0.12
      } else if (money > 10000) {
         sum = money * 0.145
      } else {
         console.log("error");

      }
   } else {
      console.log("error");
   }
   console.log(sum.toFixed(2));
   
}
komis(["Sofia",
   1500
])