// if
const isuerlogg=true
const tem=41
if (tem<50){
    console.log("less than 50");

    
}
else{
    console.log("Greter than 50");
    
}
if (2 =="2"){
    console.log("Executed");
    

}
// <
// >
// <=
// >=
// == equal to
// assignment operator
// !=
// === type check
// !==


const score=200
if(score>100){
    var power="fly" // vars have global scope
    console.log(`user power :${power}`);
    
}

const balance=1000
if (balance>500){
    console.log("Yes");
    
}

const bal=1000
if(bal>500) console.log("Ok");


// nesting 
if(balance<500){
    console.log(`less than`);
    
}
else if(balance<750){
    console.log(`less than 750`);
    
}
else{
    console.log(`less than 1200`);
    
}

const userlog=true
const debcard=true
const logingoogle=false
const loginemail=true
if (userlog && debcard){
    console.log("Allowed");
    
}
if (logingoogle || loginemail){
    console.log("Logged in");
    
}
else{
    console.log("Not allowed");
    
}
// switch 
// case sensitive
const month=3
switch (month) {
    case 1:
        
        console.log("Jan");
        break;
    case 2:
        
        console.log("Feb");
        break;
    case 3:
        
        console.log("March");
        break;
    
    default:
        console.log("Default");
        
        break;
}