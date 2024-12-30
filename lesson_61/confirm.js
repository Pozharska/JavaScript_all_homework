// JavaScript появился в 1995 году ?
// Спецификация JavaScript называется ECMAScript ?
// JavaScript был создан за 1 месяц ?


if (confirm('JavaScript появился в 1995 году') === true) {
    alert(`Вірно`);
} else {
    alert(`4 декабря 1995 года LiveScript переименовали в JavaScript, получив соответствующую лицензию у Sun`);
}

if (confirm('Спецификация JavaScript называется ECMAScript') === true) {
    alert(`Вірно`);
} else {
    alert(`Спецификация (формальное описание синтаксиса, базовых объектов и алгоритмов) языка JavaScript называется ECMAScript`);
}

if (confirm('JavaScript был создан за 1 месяц ?') === false) {
    alert(`Вірно. Перша версія мови була створена за 10 днів`);
} else {
    alert(`Не вірно! Перша версія мови була створена за 10 днів`);
}
