const tinderUser=new Object()
console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="kritish"
tinderUser.islogged=false
console.log(tinderUser);


const regurlaruser={
    email:"kritish@gmail.com",
    fullname:{
        userfullname:{
            first:"kritish",
            last:"mohapatra",
        }
    }
}

console.log(regurlaruser);
console.log(regurlaruser.fullname.userfullname.last);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c"
}
//const obj3={obj1, obj2}
//const obj3=Object.assign({}, obj1, obj2)
// merging objects

const obj3={...obj1, ...obj2}
console.log(obj3);

// database
const users=[
    {id:1,
        email:"kritish"
    }
]
console.log(users[0].email);

//keys
console.log(Object.keys(tinderUser));
// gives array

console.log(Object.entries(tinderUser));
// array of array 

console.log(tinderUser.hasOwnProperty("name"));
// gives boolean 




