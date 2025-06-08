//jan 1 1970
//Dates
let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());
//Sun Jun 08 2025 16:31:29 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString());
//8/6/2025, 4:32:17 pm

console.log(typeof(mydate));
//object

let mycreatedate=new Date(2023, 0, 23, 5, 3)
console.log(mycreatedate.toString());
// month starts from 0
// year, month, date
//hour minute
let andate=new Date("01-22-2005")
console.log(andate.toString());


let mytimestamp=Date.now()
console.log(mydate.getTime());
//for compairing
console.log(Math.floor(Date.now()/1000));


let newdate=new Date()
console.log(newdate.getMonth());
//june-5

newdate.toLocaleString("default",{weekday:"long"})






