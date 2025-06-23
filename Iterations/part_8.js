// const myarr=[1, 2, 3]
// initial=0
// const mytotal=myarr.reduce(function (acc, currval){
//     console.log(`acc=>${acc} currval=>${currval}`);
    
//     return acc+currval

// }, 0)
// console.log(mytotal);

const myarr=[1, 2, 3]
initial=0
const mytotal=myarr.reduce((acc, currval)=>acc+currval, 0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total=shoppingCart.reduce((acc, item)=> acc+item.price, 0)
console.log(total);

