function trubi(input){
   let poolVolume =Number(input[0])
   let p1 = Number(input[1]);
   let p2 = Number(input[2]);
   let h = Number(input[3]);

   let flowRate = (p1 + p2) * h;

   if(flowRate <= poolVolume ){
       let totalLiters = (flowRate / poolVolume) *100

       let pipeP1 = p1 * h;
       let pipeP2 = p2 * h;
       let pipe1Total = parseInt((pipeP1 / flowRate) * 100)
       let pipe2Total = parseInt((pipeP2 / flowRate) * 100)

       console.log(`The pool is ${parseInt(totalLiters)}% full. Pipe 1: ${pipe1Total}%. Pipe 2: ${pipe2Total}%.`)
   }else{
       let overFlow = Math.abs(flowRate - poolVolume).toFixed(1);
       console.log(`For ${h} hours the pool overflows with ${overFlow} liters.`)

   }


}
trubi([100,
   100,
   100,
   2.5
   ])