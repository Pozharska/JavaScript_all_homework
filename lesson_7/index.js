let sum = 0;
console.log('initial sum', sum);
const numberOfElements = 10;
for (i = 1; i < numberOfElements; i += 1) {
    console.log('i / sum', i, sum);
    sum += i;
}
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);
