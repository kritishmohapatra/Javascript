const useremail="kritish"
if (useremail){
    console.log("Got user email");
    
}
else{
    console.log("Donot have mail id");
    
}
const useremails=[]
// False values=> false, 0(zero), -0, bigint=>0n, Nan, null, undefined, ''
// True values=> true, "0", 'false'," ",[], {}, function(){}

if (useremails.length===0){
    console.log('empty');
    
}

const empty={}
if (Object.keys(empty).length===0){
    console.log("Empty");
    
}


// nullish coalescing operator (??): null undefined

let val1;
val1=5??10
val1=null??10
console.log(val1);

//condition ? true :false

const ice=100
ice >=80? console.log("Greater"): console.log("Less than");


