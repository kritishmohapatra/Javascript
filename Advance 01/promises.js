const pr1=new Promise(function(resolve, reject){
    // do an async task
    //db calls
    // network call
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
        

    },1000)

})
pr1.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const pr3=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Kritish", email:"kritish"})

    },1000)
})
pr3.then(function(user){
    console.log(user);
    

})

const pr4=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Kritish", pass:145792})
        }
        else{
            reject(`Error something went wrong`)
        }

    },1000)
})
const username1=pr4.then((user)=>{
    console.log(user);
    return user.username
    

}).then((username)=>{
    console.log(username);
    
}).catch(function(err){
    console.log(err);
    
}).finally(()=>{
    console.log("The promise is either rejected or resolved");
    

})

const pr5=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Python", pass:145792})
        }
        else{
            reject(`Error python went wrong`)
        }

    },1000)

})
async function consumedpromise(){
    try{
        const res=await pr5
        console.log(res);
    

    }
    catch(error){
        console.log(error);
        
    }
    
}
consumedpromise()

// async function getall(){
//     try {
        
//         const res=await fetch("https://jsonplaceholder.typicode.com/users")
//         const data= await res.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('E:', error);
        
        
//     }
    
// }
// getall()

fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})