console.log("\n=== Денструризация массивов ====");
const colors = ["red", "green", "blue"];
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

const product = {
    name: "apple",
    price: 4,
    category: "fruits",
    inStock: true,
}

// const Name =product.name;
// console.log(Name);

// const { name, price, category, inStock} = product;
// console.log(name, price, category, inStock);

// const { name: Name, price: Price, category: Category, city: City } = product;
// console.log(Name,Price,Category,City)

function printProduct(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log(`City: ${product.city}`);
}
printProduct(product);