// 4. Создать массив аудиторий академии.
// Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, 
// для которого она предназначена. Написать несколько функций для работы с ним

let audience = [{
    name: 'English',
    qntSeats: 15,
    department: 'management',
},
{
    name: 'History',
    qntSeats: 10,
    department: 'economic',
},
{
    name: 'Math',
    qntSeats: 25,
    department: 'finance',
},
{
    name: 'History',
    qntSeats: 15,
    department: 'management',
},
{
    name: 'English',
    qntSeats: 20,
    department: 'economic',
},
{
    name: 'Math',
    qntSeats: 15,
    department: 'programming',
},
{
    name: 'Biology',
    qntSeats: 23,
    department: 'programming',
}
]

// Вывод на экран всех аудиторий;

// function getItem() {
//     for (i = 0; i < audience.length; i++);
//     console.log(audience);
// };
// getItem()

// Вывод на экран аудиторий для указанного факультета;


// let item = "management";
// let newAudience = audience.filter(x => x.department === item);
// console.log(newAudience);


// Функция сортировки аудиторий по количеству мест;

// console.log(audience);

// let newCab = audience.slice();

// function sorItems(arr) {
//     arr.sort(function (a, b) {
//         return a.qntSeats - b.qntSeats;
//     });
//     console.log(arr);
// }
// sorItems(newCab);


// Функция сортировки аудиторий по названию (по алфавиту).

// function sortItemsAlfabet(arr) {
//     arr.sort(function (a, b) {
//         if (a.name > b.name) {
//             return 1;
//         } if (a.name < b.name) {
//             return -1;
//         }
//     });
//     console.log(newCab);
// };
// sortItemsAlfabet(newCab);



// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
//Объект-группа состоит из названия, количества студентов и названия факультета;


function filtrAudience(arr, a, b, c) {
    let newAspecial = arr.filter(element => (element.qntSeats <= b) && (element.department == c) && (element.name == a));
    return newAspecial;
}

console.log(filtrAudience(audience, 'English', 20, 'economic'));
