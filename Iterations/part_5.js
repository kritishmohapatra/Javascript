const code=["js", "java", "py", "cpp"]
code.forEach(function (item) {
    console.log(item);
    
})

const coded=[1, 2, 3]
coded.forEach(function (item) {
    console.log(item**2);
    
})


const c=[1, 5, 9]
c.forEach((item)=>{
    console.log(item);
    
})

code.forEach((item, index, arr)=> {
    console.log(item , index, arr);
    

})


const mycode=[{
    language:"javascript",
    ext:"js"
},{
    language:"python",
    ext:"py"
},{
    language:"c++",
    ext:"cpp"
}]

mycode.forEach((item)=>{
    console.log(item.language, item.ext);
    
})