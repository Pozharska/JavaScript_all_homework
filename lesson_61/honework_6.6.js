const clientName = prompt('Введіть ім`я клієнта');
let clientSpentToday = prompt('Скільки клієнт витратив сьогодні?');
let clientSpentForAllTime= prompt('Скільки клієнт витратив за увесь час?');

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (!clientSpentToday || !clientSpentForAllTime) {
    alert(`Сума, яку клієнт витратив весь час і яку витратив сьогодні, має бути числом! Перезавантажте сторінку, щоб повторити спробу!`);
} else {
    if (clientSpentToday >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentToday >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime <= 500) {
        discount = 30;
    }

    alert(`Вам надається знижка у ${discount}%!`);

    clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100);
    clientSpentForAllTime += clientSpentToday;

    alert(`Дякую, ${clientName}! До оплати ${clientSpentToday}$. За весь час у нашому ресторані ви витратили ${clientSpentForAllTime}$.`);
}
    

