alert(
    'Assalomu alaykum! \nSiz sayohat uchun ketadigan pul mablag\'iga pulizni yetish yoki yetmasligini bilib oling.'
);
var user_name = prompt('Ismingizni kiriting: ', 'Alisher');
var user_money = Number(prompt(`${user_name} pulingizni kirting:`, '0'));
var travel_money = 500 * 9433.34;
var hotel_money = 250 * 9433.34;
var museum_money = 120 * 10354.03;
var all_money = travel_money + hotel_money + museum_money;
console.log('Sayohat uchun ketadigan pul mablag\'i: ' + all_money + ' sum;' );
console.log(`Sizning pulingiz: ${user_money} sum;`)
if (user_money >= all_money) {
    console.log('Oq yo’l, Alisher!');
}else {
    console.log('Alisher, ozgina sabr qilish kerak bo’lar ekan.');
}