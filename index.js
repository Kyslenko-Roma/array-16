function sumNumber() {
    let numbers = [];

    while (true) {
        let input = prompt('Введіть число або слово стоп');

        if (!isNaN(input) && input !== '' && input !== null) {
            numbers.push(Number(input));
        } else if (input.toLowerCase() === 'стоп') {
            break;
        } else {
            alert('Введіть коректне значення');
        }
    }

    let sum = numbers.reduce(function (acc, arr ) {
        return acc + arr;
    }, 0);

    console.log('Сума чисел' , sum);
}

sumNumber();