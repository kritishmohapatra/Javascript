//array
const myarr=[1, 2, 3, 4, 5, "true", true]
// it is a object
// arrays are resizeable

console.log(myarr[0]);
//accessing array elememts  

const myhero=["shaktiman", "naagraj"]
console.log(myhero);

const myarr2=new Array(1,2,3, 4)
console.log(myarr2);

myarr.push(6)
console.log(myarr);
myarr.push(7)
console.log(myarr);
//appending

myarr.pop()
console.log(myarr);
//last removed

myarr.unshift(9)
console.log(myarr);
//add to first time consuming

myarr.shift()
console.log(myarr);
//remove from first

console.log(myarr.includes(9));
//true or false

console.log(myarr.indexOf(1));
//gives index of ele


const newa= myarr.join()
console.log(newa);
//give string

// slicing
const mysl=myarr.slice(1,4)
console.log(mysl);
//it gives a copy


//splice
const myspl=myarr.splice(1, 4)
console.log(myspl);
//include last range
// it changes array by pop out the ele to the new







