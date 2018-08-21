function pool(params) {
   let broiUchastnici= Number(params[0]);
   let glaszapurwo= Number(params[1]);

   let vrotiezik= glaszapurwo- glaszapurwo*0.2
   let tretiezik= vrotiezik- vrotiezik*0.1
   let obshto= glaszapurwo+vrotiezik+tretiezik;

  
   if(obshto>=(broiUchastnici/2)){
      console.log(`First three languages have ${Math.abs(Math.round(obshto-(broiUchastnici/2)))} votes more`);
      
   }else if(obshto<(broiUchastnici/2)){
      console.log(`First three languages have ${Math.abs(Math.round(obshto-(broiUchastnici/2)))} votes less of half votes`);
      
   }
   
   
   
}
pool([400,
   201
   ])