const sumAll = function(a, b) {
    let big;
    let small;
    let sum = 0;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    } else if (a !== Math.floor(a) || b !== Math.floor(b)) {
        return 'ERROR'
    } else if (a < 0 || b < 0) {
        return 'ERROR'
    }

    if (a > b) {
        big = a;
        small = b;
    } else {
        big = b;
        small = a
    }

    for (let i = small; i <= big; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
