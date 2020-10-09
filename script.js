// const invoice = 100;
// const stock = 100;

// // Write code under this line
// let message;

// if (invoice <= stock) {
//   console.log((message = "Заказ оформлен, с вами свяжется менеджер"));
// } else {
//   console.log((message = "На складе недостаточно товаров!"));
// }
///////////////////////////////////////////////////////////

// const userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// const passwordField = prompt("Please enter password:");
// console.log(passwordField);

// if (passwordField === null) {
//   console.log((message = CANCELED_BY_USER));
// } else {
//   if ((passwordField === userPassword, passwordField === ADMIN_PASSWORD)) {
//     console.log((message = ACCESS_IS_ALLOWED));
//   } else {
//     console.log((message = ACCESS_DENIED));
//   }
// }

///////////////////////////////////////////////////////////

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let quantityField = prompt("Please enter quantity:");
// console.log(quantityField);

// let orderPieces = quantityField;

// let totalPrice = pricePerDroid * orderPieces; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// if (quantityField === null) {
//   console.log((message = CANCELED_BY_USER));
// } else {
//   if (totalPrice > credits) {
//     console.log((message = ACCESS_DENIED));
//   } else {
//     console.log(
//       (message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`)
//     );
//   }
// }

///////////////////////////////////////////////////////////

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country =
//     countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       message = NO_DELIVERY;

//   }
// }
// if (price > 0) {

//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

///////////////////////////////////////////////////////////
