// Q1
new Promise((resolved,rejected)=>{
    console.log(1);
    resolved(2)
}).then((result)=>console.log(result))

console.log(3)

// first promise runs as the .then or resolved value comes or settimeout comes
// after global execution only

// so it prints as
// 1,3,2

