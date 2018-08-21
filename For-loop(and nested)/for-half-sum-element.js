function chislo(arr) {
   let n=Number(arr[0]);
   let suma=0;
   let num=0;
   let biggest= Number.MIN_SAFE_INTEGER;
   
   
   
   for (let index = 1; index <= n; index++) {
    
    num=Number(arr[index]);
    suma+=num;
     if(num>biggest){
        biggest=num;
     }
    
   } 
   
   if(suma-biggest==biggest){
       console.log("Yes");
       console.log(`Sum = ${biggest}`);
        
    }else{
       console.log("No");
       console.log(`Diff = ${Math.abs(biggest-(suma-biggest))}`);
    }
        
   
   }
   chislo([4,
      6,
      1,
      2,
      3
      ])