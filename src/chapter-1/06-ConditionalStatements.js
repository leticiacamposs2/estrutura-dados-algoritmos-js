var month = 5;
if (month === 1) {
    console.log('January');
}
else if (month === 2) {
    console.log('February');
}
else if (month === 3) {
    console.log('March');
}
else {
    console.log('Month is not January, February, or March');
}

month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February, or March');
}