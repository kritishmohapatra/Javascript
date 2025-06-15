// arrow function 
const user={
    username:"kritish",
    price:99,
    welcome:function (){
        console.log(`welcome to website ${this.username}`);
        console.log(this);
        
        
    }
    
}
// user.welcome()
// user.username="sam"
// user.welcome()

// console.log(this); //it gives empty object {}

function chai(){
    let usernames="Bhuban"
    console.log(this.usernames);   // it gives undefined
    
}
chai()


const chais= function (){
    let usern="Kritish"
    console.log(this.usern);
    
}
chais() // it also gives undefined



const chaisa=  ()=>{
    let usern="Kritish"
    console.log(this); // it gives empty object{}
    
}
chaisa()



const addt=(num1, num2)=>{
    return num1+num2

}
console.log(addt(2, 4)); // arrow fun


const mul=(num1, num2)=> num1*num2
console.log(mul(5, 4));




