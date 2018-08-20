function volei(input) {
   let godina=input[0];
let praznici=Number(input[1]);
let putuvane=Number(input[2]);
let broiUikendi=48-putuvane;
let igraUikendi=(broiUikendi*(3/4));
let igraPraznici=(praznici*(2/3));
let suma=0;

if (godina==="leap") {
   suma=(igraUikendi+igraPraznici+putuvane)*1.15
}else if(godina==="normal"){
   suma=(igraUikendi+igraPraznici+putuvane)
}
console.log(Math.floor(suma));



}
volei(["normal",
   3,
   2])