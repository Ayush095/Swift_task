function pay(amount){
    console.log("The pay amount is ", amount);
    if(amount<0){
        return false;
    }
    return true;
}

function payOut(amount, upi_id) {
    
    console.log("The pay amount is ", amount +" and the upi_id is ", upi_id);
    if(amount<0){
        return false;
    }
    return true;
}


