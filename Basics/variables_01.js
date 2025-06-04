const accountId=144553 //constant can not be changed
let accountEmail="kritish@gmail.com"
var accountPassword="12345"
accountCity="Cuttack"
let accountState; //gives undefined

accountEmail="kritish21@gmail.com"
accountPassword="2147"
accountCity="bls"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountState,accountEmail, accountId, accountPassword, accountCity]) //gives output in tabular form 

