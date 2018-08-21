function online(input) {
  let nachin = input[0];
  let broiHora = Number(input[1]);
  let sumaOnline = 0;
  let sumaOnsite = 0;
  let razlika = 0;

  for (let i = 0; i < input.length; i++) {

    let nachin = input[i];
    i++
    let broiHora = Number(input[i]);
    switch (nachin) {
      case "online": sumaOnline += broiHora;
      break;
      case "onsite": sumaOnsite += broiHora;
      default:
      break;
    }
  }if(sumaOnsite > 600){
     razlika = Math.abs(sumaOnsite - 600);
    sumaOnline += razlika;
    sumaOnsite-=razlika;
  }
  
  console.log(`Online students: ${sumaOnline}`);
  console.log(`Onsite students: ${sumaOnsite}`);
  console.log(`Total students: ${sumaOnline + sumaOnsite}`);


}
online(["onsite",
  250,
  "onsite",
  354,
  "onsite",
  250
])