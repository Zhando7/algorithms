const arr = [12, 20, 44, -34, 13, 6, 3, 2, 100];
const sort_arr = arr.sort((a, b) => a -b);

binary_search(sort_arr, 13);

function binary_search(a, n) {
    let low = 0;
    let high = a.length - 1;

    while( low <= high ) {
        let mid = ((low + high) % 2 != 0 ) ? Math.floor((low + high) / 2) : (low + high) / 2;
        if(a[mid] == n) {
            return console.log(`
                Число ${n} был найден в массиве ${sort_arr}
                На позиций ${mid}
            `);
        }
        if(a[mid] > n) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return console.log('Not found!');
}