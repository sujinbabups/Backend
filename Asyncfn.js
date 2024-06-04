



function sum(res,call)
{
    console.log(res);
    setTimeout(function(){
       console.log( call(4,5));
    })
}

function add(a, b) {
    return a * b;
}

sum("Result:",add);