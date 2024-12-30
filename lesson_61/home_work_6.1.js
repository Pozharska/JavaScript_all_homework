const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';

let userLogin = prompt('Введіть логін');
userLogin = userLogin.trim();
let userPassword = prompt('Введіть пароль');
userPassword = userPassword.trim();
if (existedUserLogin === userLogin && existedUserPassword === userPassword) {
    alert(`Вітаємо, ${userLogin}!`);
} else {
    alert(`Логін та (або) пароль введені не вірно`);
}