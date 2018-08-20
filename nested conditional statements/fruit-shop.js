function magazin(input) {
   let produkt = input[0]
   let day = input[1]
   let kolich = Number(input[2]);
   let sum = 0;
   if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      if (produkt === "banana") {
         sum = kolich * 2.5
      } else if (produkt === "apple") {
         sum = kolich * 1.2
      } else if (produkt === "orange") {
         sum = kolich * 0.85
      } else if (produkt === "grapefruit") {
         sum = kolich * 1.45
      } else if (produkt === "kiwi") {
         sum = kolich * 2.7
      } else if (produkt === "pineapple") {
         sum = kolich * 5.5
      } else if (produkt === "grapes") {
         sum = kolich * 3.85
      } else {
         console.log("error");

      }
   } else if (day === "Sunday" || day === "Saturday") {

      if (produkt === "banana") {
         sum = kolich * 2.7
      } else if (produkt === "apple") {
         sum = kolich * 1.25
      } else if (produkt === "orange") {
         sum = kolich * 0.9
      } else if (produkt === "grapefruit") {
         sum = kolich * 1.6
      } else if (produkt === "kiwi") {
         sum = kolich * 3
      } else if (produkt === "pineapple") {
         sum = kolich * 5.6
      } else if (produkt === "grapes") {
         sum = kolich * 4.20
      } else {
         console.log("error");

      }
   } else {
      console.log("error");

   }
console.log(sum.toFixed(2));

}

magazin(["tomato",
   "Monday",
   0.5
   
])