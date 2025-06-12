console.log("K");
console.log("r");
console.log("i");
console.log("t");
console.log("i");
console.log("s");
console.log("h");

function say(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("i");
    console.log("s");
    console.log("h");

}
say()

function add(a, b){ // parameters
    let res=a+b 
    return res 
    // return a+b 
}
console.log(add(10, 20)); //30 // 10, 20 arguments
console.log(add(10, "a")); //10a
const res=add(5, 8)
console.log("Result:-", res);

function loginusermsg(username="sam"){
    if(username==undefined){
        return "Please enter a username"

    }
    return `${username} just logged in`
}

console.log(loginusermsg("kritish"));
console.log(loginusermsg()); //undefined








