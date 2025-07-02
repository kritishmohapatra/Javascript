const user={
    username:"Kritish",
    logincount:8,
    getuserdeatils:function(){
        console.log(`${this.username} is logged in`);
        console.log(this);
        
        
    }
}

console.log(user.username);
// user.getuserdeatils()
console.log(this);


// const pr1=new Promise()
const date=new Date()
console.log(date);

function User(username, login, islog){
    this.myusername=username
    this.login=login
    this.islog=islog
    this.greet =function (){
        console.log(`Welcome ${this.myusername}`);
        

    }
    return this

}
const user1=new User("Kritish", 12, true)
console.log(user1.constructor);

const user2=new User("hi",11, false )
console.log(user2);

