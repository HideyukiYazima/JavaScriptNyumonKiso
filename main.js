'use strict';

// console.log(10 + 3); // 13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 ** 3); // 1000
// console.log(10 / 3); // 3.3333....
// console.log(10 % 3); // 1

// console.log(10 + 2 * 3); // 16
// console.log((10 + 2) * 3); // 36


// // 変数
// let price;
// // 定数
// const rate = 1.1;

// price = 150;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

// // price = 151;
// // price = price + 1;
// price += 1;
// price++;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

// 文字列
// console.log('It\'s a pen.');
// console.log("It's a pen.");
// console.log("It's \na \npen.");

// My name is Taro Yamada, call me Taro!

// const fname = 'Taro';
// const lname = 'Yamada';

// console.log('My name is ' + fname + ' ' + lname + ', call me ' + fname + '!');
// console.log(`My name is ${fname} ${lname}, call me ${fname}!`);

// const score = Number(prompt('Scorer?'));

// if (score >= 90) {
//   console.log('A!');
// } else if (score >= 70) {
//   console.log('B!');
// } else {
//   console.log('C!');
// }

// switch文
// const color = prompt('Color?')

// switch (color) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Slow down!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong color');
//     break;
// }

// for文による反復処理

// for (let i = 0; i < 3; i++) {
//   // console.log('Hello');
//   console.log(`${i}: Hello`);
// }

// forの中にforを入れた文
// const rate = 1.1;

// for (let price = 150; price <= 160; price++) {
//   console.log(`Price: ${price}`);
//   for (let amount = 120; amount <= 140; amount+=10) {
//     console.log(price * amount * rate);
//   }
// }

// While文
// const command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// console.log(`Menu ${command} processed.`);

// let command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));

// while (command !== 0) {
//   console.log(`Menu ${command} processed.`);
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// }

let command;

do {
  command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
  if (command === 0) {
    console.log('終了します');
  } else {
    console.log(`Menu ${command} processed.`);
  }
} while (command !== 0);

