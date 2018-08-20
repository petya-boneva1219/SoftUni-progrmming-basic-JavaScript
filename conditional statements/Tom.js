function tom(input) {
   let pochivniDni=Number(input[0]);
   let normaZaSpane= Number(30000);
 let rabotniDni= 365-pochivniDni;
 let minPochDni=127*pochivniDni;
 let minRabDni= 63*rabotniDni;
 let razlika=normaZaSpane-(minPochDni+minRabDni);
 let chasove= razlika/60;
 let minuti= razlika%60;

 if((minPochDni+minRabDni)<normaZaSpane){
    console.log("Tom sleeps well");
    console.log(` ${parseInt(chasove)} hours and ${minuti} minutes less for play`);
    
 }else if((minPochDni+minRabDni)>normaZaSpane){
    console.log("Tom will run away");
    console.log(`${Math.abs(parseInt(chasove))} hours and ${Math.abs(minuti)} minutes more for play`);
 }
 
}
tom([113])