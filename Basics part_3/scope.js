var c=300
let a=300
// global scope
if (true){
    let a=10
    const b=20
    var c=30
    console.log(`Inner ${a}`); // as it is in block
    
    
    // block scope

}

console.log(a);
//console.log(b);
console.log(c); // it gives 30 


