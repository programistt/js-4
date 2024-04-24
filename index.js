let son = Math.floor(Math.random() * 100);

if  (son % 3 === 0) {
    console.log(son + " Fizz");
} else {
    if (son % 5 === 0) {
        console.log(son + " Buzz");
    } else {
        console.log(son);
    }
}