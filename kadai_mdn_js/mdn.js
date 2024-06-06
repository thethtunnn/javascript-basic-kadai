// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth()+1;
// const day = today.getDate();
// console.log(`${year}年${month}月${day}日`)

const eventa = new Date("August 22, 2023") ;
eventa.setFullYear(2023);
eventa.setMonth(3); //january is "zero"
eventa.setDate(24);


console.log(eventa.getFullYear())

console.log(eventa.getMonth())

console.log(eventa.getDate())