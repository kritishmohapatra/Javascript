// Immediataely Invoked Function Expression (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// to prevent global polution

((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})("Kritish")