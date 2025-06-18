// for
array=[1, 2, 3, 4]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}
for (let index = 0; index < 11; index++) {
    if(index==5){
        console.log("Best num");

        
    }
    console.log(index);
    
    
    
}

for (let i = 1; i <=10; i++) {
    console.log(`Table for ${i}`);
    
    for (let j = 1; j <=10; j++) {
        console.log(`${i}x${j}=${i*j}`);
        
        
    }
    
}

// keywords
// break and continue

for (let index = 1; index <=20; index++) {
    if(index==10){
        console.log("10 Detected");
        
        break
    }
    else{
        console.log(`Number is ${index}`);
        
    }
    
}

for (let index = 1; index <=20; index++) {
    if(index==10){
        console.log("10 is detected");
        continue
    }
    else{
        console.log(`Number is ${index}`);
        
    }
    
}