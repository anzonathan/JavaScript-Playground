// Generating the fibonacci sequence using recursion in JS

function fib(n){

    if (n == 1){
        return 0;
    }

    else if (n == 2){
        return 1;

    }

    else {
        return fib(n-2) + fib(n-1);
    }
}

console.log(fib(8))
