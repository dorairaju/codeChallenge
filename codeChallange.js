function removeOddElements(arr, ival) {
    if (arr[ival] === undefined) {
        return arr;
    }
    if (arr[ival] % 2 !== 0) {
        arr.splice(ival, 1);
    } else {
        ival += 1;
    }
    removeOddElements(arr, ival);
}


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113];
removeOddElements(array, 0);
console.log(array);