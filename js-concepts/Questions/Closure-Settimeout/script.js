for(let i=1;i<5;i++){
    setTimeout(() => {
        console.log(i) // reference to i is used.
    }, i*1000);
}