function online(input) {
  let wayOfStudy = input[0];
  let numOfStudents = Number(input[1]);
  let sumOnline = 0;
  let sumOnsite = 0;
  let difference = 0;

  for (let i = 0; i < input.length; i++) {

    let wayOfStudy = input[i];
    i++
    let numOfStudents = Number(input[i]);
    switch (wayOfStudy) {
      case "online": sumOnline += numOfStudents;
      break;
      case "onsite": sumOnsite += numOfStudents;
      default:
      break;
    }
  }if(sumOnsite > 600){
     difference = Math.abs(sumOnsite - 600);
    sumOnline += difference;
    sumOnsite-=difference;
  }
  
  console.log(`Online students: ${sumOnline}`);
  console.log(`Onsite students: ${sumOnsite}`);
  console.log(`Total students: ${sumOnline + sumOnsite}`);


}
online(["onsite",
  250,
  "onsite",
  354,
  "onsite",
  250
])