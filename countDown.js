// Использование рекурсий для создания обратного счетчика
function countDown(n) {
    if(n <= 0 ) {
        return n;
    } else {
        console.log(n);
        countDown(--n);
    }
}

countDown(10);