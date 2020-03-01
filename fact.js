// Рекурсивная функция для вычисления факториала
function fact(x) {
    if( x <= 1) {
        return x;
    } else {
        return x * fact(x - 1);
    }
}

var x = fact(4);
console.log(`Факториал равен = ${x}`);