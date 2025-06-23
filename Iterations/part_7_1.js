const mynum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum=mynum.map((i)=>i+10)
console.log(newnum);
// map


//chaining

const newnumber=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnumbeRS=newnumber.map((num)=>num*10).map((j)=>j+1).filter((k)=>k>40)
console.log(newnumbeRS);

