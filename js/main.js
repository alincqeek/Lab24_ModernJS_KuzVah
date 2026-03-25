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


const mas1 = [1, 2, 3];
const mas2 = [4, 5, 6];
const mas3 = [...mas1, ...mas2]
function findMax(...rest) {
    return rest.reduce((max, num) => rest.reduce((max, num) => {
        return num > max ? num : max;
    }, 0));
}
console.log(mas3)
console.log(findMax(4,6,8,2))

const obj1 = { name: "Иван", age: 30 };
const obj2 = { city: "Москва", occupation: "Developer" };
const mergedObj = { ...obj1, ...obj2 };
console.log( mergedObj);