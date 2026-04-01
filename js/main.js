// console.log("\n=== Денструризация массивов ====");
// const colors = ["red", "green", "blue"];
// const color1=colors[0];
// const color2=colors[1];
// console.log(color1,color2);
// const[firstColor,secondColor,thirdColor]=colors;
// console.log(firstColor,secondColor,thirdColor);

// const[primary,,tertiary]=colors;
// console.log(primary,tertiary);

// const [c1, c2, c3, c4 = "yellow"]=colors;
// console.log(c4); 

// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);


// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: userName2, age: userAge2, city: userCity } = user;
// console.log(userName2, userAge2, userCity);

// function prrintUserOld(user){
//     console.log(`Имя: ${user.name}`);
//  console.log(`Возраст: ${user.age}`);
//   console.log(`Город: ${user.city}`);
// }
// prrintUserOld(user);   
// console.log();
// prrintUserOld(user);

// const product = {
//     name: "apple",
//     price: 4,
//     category: "fruits",
//     inStock: true,
// }

// const Name =product.name;
// console.log(Name);

// const { name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// const { name: Name, price: Price, category: Category, city: City } = product;
// console.log(Name,Price,Category,City)

// function printProduct(product) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Category: ${product.category}`);
//     console.log(`City: ${product.city}`);
// }
// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];


// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const coppy = [...arr1,];
// console.log(coppy);
// const extended =[0, ...arr1,7,8];
// console.log(extended)

// const person={
//     name: "Иван",
//     age: 30,
// };

// const address={
//     city:"Санкт-Питербург",
//     street:"Невский проспект" ,
// };
// const fullInfo ={...person, ...address}
// console.log("Полная информация:",fullInfo)

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);


// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// function sum(...numbers){
//     return numbers.reduce((total,num) => total+num,0)
// ;}
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));


// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);


// const mas1 = [1, 2, 3];
// const mas2 = [4, 5, 6];
// const mas3 = [...mas1, ...mas2]
// function findMax(...rest) {
//     return rest.reduce((max, num) => rest.reduce((max, num) => {
//         return num > max ? num : max;
//     }, 0));
// }
// console.log(mas3)
// console.log(findMax(4,6,8,2))

// const obj1 = { name: "Иван", age: 30 };
// const obj2 = { city: "Москва", occupation: "Developer" };
// const mergedObj = { ...obj1, ...obj2 };
// console.log( mergedObj);

// import {greet,add,PI} from "./utils.js"
// console.log("Модули");
// console.log(greet("Алексей"));
// console.log("5+3=",add(5,3));
// console.log("Значение PI",PI );

// import {multiply as умножить} from "./utils.js";
// console.log("4*7=",умножить(4,7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("Умножение: ",Utils.multiply(3 ,9));

// import * as Utils from "./math.js";
// console.log("4√7=",Utils.square(4,2));
// console.log("4**7=",Utils.cube(4,2));
// console.log("Значение E=",Utils.E );

// console.log("Промисы");
// const simplePromise=new Promise((resolve,reject)=>{
//     const success=true;
//     if (success){
//         resolve ("Операция выполнена успешно!") ;
//     }else{
//         reject("Произошла ошибка") ;
//     }
// })
// simplePromise
//     .then((result) => console.log("Результат:",result))
//     .catch((error) => console.log("Ошибка:", error));

// function delay(ms){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve(`Прошло ${ms} миллисекунд`);
//         },ms);
//     })
// }
// delay(1000)
//     .then((message)=>console.log(message));

// function fetchUserData(userId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (userId >0){
//                 resolve({
//                    id:userId,
//                    name:"Иван Иванович",
//                    email:"ivan@example.com" ,
//                 });
//             }else{
//                 reject("Неверный ID пользователя")
//             }
//         }, 1500);
//     })
// }
// fetchUserData(1)
//     .then((user)=>console.log(user))
//     .catch((error)=>console.log(error));

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Шаг 1 завершён"), 500);
//   });
// }

// function step2(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершён`), 500);
//   });
// }

// function step3(previousResult) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершён`), 500);
//   });
// }


// step1()
//     .then((result1)=>step2(result1))
//     .then((result2)=>step3(result2))
//     .then((finalResult)=>consol.log("Финальный результат:", finalResult))
//     .catch((error)=>console.log("Ошибка",error))