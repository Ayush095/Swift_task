// document.getElementById('pay').addEventListener("click", function(){
//     analytics("pay");
// });

// document.getElementById('payOut').addEventListener("click", function(){
//     analytics("payOut");
// });


let payFxn = window.pay;
let payOutFxn = window.payOut;


window.pay = function() {
    console.log("The pay feature is triggered");
    payFxn.apply(this, arguments);
}

window.payOut = function() {
    console.log("The payOut feature is triggered");
    payOutFxn.apply(this, arguments);
}


// function analytics(checkfeature) {
//     console.log("The checkfeature is ", checkfeature);
//     if(checkfeature == 'pay'){
//         console.log("The pay feature is triggered");
//     } else if(checkfeature == 'payOut'){
//         console.log("The payOut feature is triggred");
//     }
// }