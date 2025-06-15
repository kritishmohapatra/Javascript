
// nested scope
function one(){
    const user="kritish"
    function two(){
        const web="youtube"
        console.log(user);
        
        
    }
    // console.log(web); // it gives error web is not defined
    two()
    
}
one()


if (true){
    const usern="kritish"
    if (usern==="kritish"){
        const webs="youtube"
        console.log(usern+webs);

        
    }
    // console.log(webs); // out of the scope

    
}
// console.log(usern); // not in the scope


// ************ interesting ***************
// hoisting
console.log(addone(4));


function addone(num){
    return num+1
}
addone(5) // it retuns 6 
// stores in a variable
console.log(addtwo(4));

const addtwo=function (num){
    return num+2
}
addtwo(6)
