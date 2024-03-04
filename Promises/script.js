// create a promise

function createPromiseForCart(cart){
    const ourPromise=new Promise(function(resolved,rejected){
        // resolve and reject are fucntions
        if(!validateCart(cart)){
            const error=new Error("Not a valid cart")
            rejected(error)
        }
        const orderId=1234
        resolved(orderId);
    })
    return ourPromise;
}

function validateCart(){
    return true;
}

const cart=[12,34,56]

createPromiseForCart(cart).then((res)=>console.log(res)).catch((error)=>console.log(error))

