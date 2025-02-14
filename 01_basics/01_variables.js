const accountId = 1370
let accountEmail = "hemant@gmail.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2   //not allowed

accountEmail = "HG@hg.com"
accountPassword = "11122"
accountCity = "Bengaluru"

console.log(accountId); 

/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
