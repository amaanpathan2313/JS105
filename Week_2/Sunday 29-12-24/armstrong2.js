// Armstrong number means sum of cube of each digit = that number 
function armstrong(N) {

   let num = N;
   let sum = 0;
   while (num > 1) {
      let lastdigit = (num % 10);
      // console.log(lastdigit)
      sum += (lastdigit * lastdigit * lastdigit);

      num = Math.floor(num / 10);
      //  console.log(num);
   }

   if (N === sum) {
      console.log(`${N} is armstrong number`)
   } else {
      console.log(`${N} is not a armstrong number`)
   }
   
}//

armstrong(370)
armstrong(407)
armstrong(300)