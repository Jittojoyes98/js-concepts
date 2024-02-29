const radiusArray=[1,5,9,12]

function area(radius){
    return Math.PI*radius*radius;
}

function perimeter(radius){
    return 2*Math.PI*radius;
}


function calcualate(radius,logic){
    let ans=[]
    for(let i=0;i<radius.length;i++){
        ans.push(logic(radius[i]))
    }
    return ans;
}

console.log(calcualate(radiusArray,area));
console.log(calcualate(radiusArray,perimeter));
