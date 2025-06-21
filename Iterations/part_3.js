// for of
arr=[1, 2, 3]
for (const element of arr) {
    console.log(element);
    
    
}
const greet='Hello world'
for (const g of greet) {
    console.log(g);
    
    
}

// maps 
const map=new Map()
map.set("Kritish","male")
console.log(map);
// ordered and unique

for (const [key, val] of map) {
    console.log(key, val);
    
    
}
const myobj={
    "game1":"NFS",
    "game2":"PUBG"
}

for (const [k, v] of myobj) {
    console.log(k,v); // gives error
    
    
}