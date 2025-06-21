const myobj={
    js:"javascript",
    py:"python",
    cpp:"C++"
}

for (const key in myobj) {
    console.log(myobj[key]);
    
   
}

const arr=[1, 2, 3]
for (const key in arr) {
    console.log(arr[key]);
    
    
}
const map=new Map()
map.set("Kritish","male")
for (const key in map) {
    console.log(map[key]); // no output
    
    
}
