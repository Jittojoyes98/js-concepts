// easy changes

function x(){
    var a=10;
    return function y(){
        console.log(a);
    }
}
const ans=x();
ans()
