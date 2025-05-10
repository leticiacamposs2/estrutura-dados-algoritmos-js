var num = 1;
if (num === 1) {
    console.log('num is equal to 1');
}

num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num);
}

if (num === 1) {
    num--;
} else {
    num++;
}

(num === 1) ? num-- : num++;