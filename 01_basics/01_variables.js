const accountId = 144553   //cannot chnage
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"    //avoid to use it  because of issue in block scope and functional scope
accountCity = "Jaipur"
let accountState;     //undefined value



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
