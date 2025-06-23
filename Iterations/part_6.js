const code=["js", "java", "py", "cpp"]
const values=code.forEach((item) => {
    console.log(item);
    
    
});
console.log(values); //not return a value


// filter function
const mynum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnums=mynum.filter((num)=>num>4)
console.log(newnums);


const mynum1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const neweve=mynum1.filter((num)=>{
    return num%2==0
})
console.log(neweve);

const newnum=[]
mynum.forEach((nums)=>{
    if(nums>4){
        newnum.push(nums)
    }
})
console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userbooks=books.filter((book)=>book.genre==="History")
console.log(userbooks);
const userafter=books.filter((book)=>{return book.publish>=2000})
console.log(userafter);

const userafter_his=books.filter((book)=>{return book.publish>=1995 && book.genre==="History"})
console.log(userafter_his);



