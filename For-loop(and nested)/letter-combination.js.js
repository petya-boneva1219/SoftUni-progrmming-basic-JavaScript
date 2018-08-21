function bukvi(params) {

let a= params[0];
let toString=a.charCodeAt(0);
let b= params[1];
let toString2=b.charCodeAt(0);
let c= params[2];
let toString3= c.charCodeAt(0);
let counter= 0;
let final="";



for (let i = toString; i <= toString2 ;i++) {
   for (let j= toString; j <= toString2; j++) {
      for (let k= toString; k <= toString2 ;k++) {
         
      if(toString3!=i && toString3!=j && toString3!=k){
       counter++; 
         let nov=String.fromCharCode(i);
         let nov2= String.fromCharCode(j);
         let nov3= String.fromCharCode(k)
         final+=`${nov}${nov2}${nov3} `;
         
      }
   
   }
   
}
   
}
console.log(final, counter);



}
bukvi(["a",
   "c",
   "b"
   ])