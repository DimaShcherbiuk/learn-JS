const start = 11;
const end = 15;
let number;
for (let i = start; i < end; i++) {
  if(i % 5 === 0){
      number = i;
      console.log(number);
    break;
  }
}