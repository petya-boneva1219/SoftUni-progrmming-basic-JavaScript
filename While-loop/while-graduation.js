function gradued(args) {
   let name = args[0];
   let currnetClass = 1;
   let sum = 0;
   let i = 1;

   while (currnetClass <= 12) {
       let grade = Number(args[i]);
       if (grade >= 4) {
           sum+=grade;
           currnetClass++;

       } else{
           console.log(`${name} has been excluded at ${currnetClass} grade`);
           return;
       }
       i++;    
   }
   let all = sum/12;
   console.log(`${name} graduated. Average grade: ${all.toFixed(2)}`);
}
gradued(["Gosho",
   5,
   5.5,
   6,
   5.43,
   5.5,
   6,
   5.55,
   5,
   6,
   6,
   5.43,
   5
   ])