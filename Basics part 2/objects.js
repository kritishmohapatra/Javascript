//object

//singleton

//object literals
 
const my= Symbol("key1")
const jsuer={
    name:"kritish",
    age:10,
    [my]:"key1",
    subject:["math", "science"],
    email:"kritish@gmail.com",

}
//key values
console.log(jsuer["name"]);
console.log(jsuer.email);
console.log(jsuer.my);// it is not symbol datatye

console.log(typeof(jsuer.my)); // string but we want symbol

//use square bracket for sym
console.log(jsuer[my]);

jsuer.email="kritishmo@gmail.com"
console.log(jsuer['email']);
// Object.freeze(jsuer)// freeze 

jsuer.greet=function(){
    console.log("Hello Kritish");
    
}
jsuer.greet2=function(){
    console.log(`Hello ${this.name}`); // this for object.name
    
}
//calling that function 
jsuer.greet()
jsuer.greet2()



