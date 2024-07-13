// const numbers = [88, 99, 77, 421, 54, 63];


// numbers.push(12);

// // console.log(numbers);



// const friends = ["Balam", "Kalam", "Abul", "Kashem"]
// // friends.push("Khailam")
// // console.log(friends);
// // friends.pop()
// // console.log(friends);
// // friends.shift();
// // console.log(friends);

// // console.log(friends.includes('Kalam')); 


// let someNumber = 33;

// let stringNumber = String(someNumber);
// // console.log(stringNumber);


// // ********* Operation ************

// let value = 3
// let negValue = -value

// // console.log(negValue);

// const name = "Sami";
// const repoCount = 30;

// // console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// // +++++++++++++ string ++++++++++++


// const gameName = new String('alsami-sm')


// const newString = gameName.substring(0 ,4) 
// // console.log(newString);



// const newStringOne = "    Sami    "

// // console.log(newStringOne.trim());


// // ++++++++++++++++++ Array +++++++++++++++++

// const marvelHeros = ["Thor", "Ironman", "Spiderman"]
// const dcHeros = ["Superman", "Batman", "Flash"]


// // const allHeros = marvelHeros.concat(dcHeros)

// // console.log(allHeros);


// const allNewHeros = [...marvelHeros, ...dcHeros]

// // console.log(allNewHeros)


// // console.log(Array.isArray("sami"))
// // console.log(Array.from("sami"))
// // console.log(Array.from({name: "sami"})) // interesting case


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// // console.log(Array.of(score1,score2,score3));

// // includes
// const bondhu = ["sojib", "sami", "nabidul", "raihan"]
// // console.log(bondhu.includes('sojib'));

// // ++++++++ LOOP +++++++++


// const numbers = [12, 13, 14, 15, 16, 17]

// console.log(numbers);

// for (const num of numbers) {
//     console.log(num);
// }


// let num = 1
// let sum = 0

// while (num <= 10){
//     console.log(num)
//     sum = sum + num;
//     console.log('sum:', sum);
//     num++
// }



//  for (let i=0; i<20; i++){
//     if(i%2!==0){
//         console.log(i);
//     }
//  }


//  restart programing hero course

// const salary = 25000;
// const isBCS = true;
// const height = 67;
// const hasCar = true;


// // if(salary > 20000  && height > 6 && ){
// //     console.log('Shupatro');
// // }
// // else{
// //     console.log('onno patro kujhi');
// // }


// if ((salary >= 25000 && height > 65 && hasCar == false) || isBCS == true){
//     console.log('esho baba kobul');
// }else{
//     console.log("no entry");
// }


// Mulit level condition

// const price = 5000;

// if (price >= 4000){
//     const discount = price * 10/100;
//     const pay = price-discount;
//     console.log(discount);
//     console.log(pay);
// }

// const age = ;
// const price = 500;

// if (age <= 12){
//     console.log('You can eat for free');
// }else if(age >= 60){
//     const discount = price * 50 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }else{
//     console.log(price);
// }



//  +++++++++++ Grade system +++++++++++++

// const mark = 100;

// if(mark >= 80){
//     console.log("You got A+");
// }else if(mark >= 70){
//     console.log("You got A");
// }else if(mark >= 60){
//     console.log("You got A-");
// }else if(mark >= 50){
//     console.log("You got B");
// }else if(mark >= 40){
//     console.log("You got C");
// }else if(mark >= 33){
//     console.log("You got D");
// }else{
//     console.log("You failed");
// }


// const capital = 'Dhaka'
// console.log(capital.length);
// console.log(capital[3]);

// const drink = 'water';
// const liquid = 'water '

// if(drink.trim() === liquid.trim()){
//     console.log("pani er opr nam jibon")
// }else{
//     console.log("somdre pani ase khaite pari na");
// }


// const address = 'andorkilla';
// const part = address.slice(2, 5)
// console.log(part);

// const sentence = "I am a good and hardworking person.";
// // console.log(sentence.split(' '));
// console.log(sentence.split('a'));

// const friendsStr = 'Rahim,khaim,Dhaim,Fahim,joker'
// const friends = friendsStr.split(',');
// console.log(friends);
// const realFriend = [ 'Rahim', 'khaim', 'Dhaim', 'Fahim', 'joker' ];
// console.log(realFriend.join(' '));


// const first = 'Abid';
// const last = 'Nabid';

// const fullName = first + ' ' + last;
// // console.log(fullName);
// const fullName2 = first.concat(' ').concat(last);
// console.log(fullName2);

// console.log(last.includes('a'));

// const sentence = "I am learning Web Dev.";

// let reverse = '';
// // for(const letter of sentence){
// //     // console.log(letter);
// //     reverse = letter + reverse;
// // }
// // console.log(reverse);

// for(let i = 0; i < sentence.length; i++){
//     // console.log(i);
//     // console.log(sentence[i]);
//     const letter = sentence[i];
// }
// console.log(letter);


// let num = 0;
// while(num <= 5){
//     console.log("Re-Lreaning", num);
//     num++;
// }


// const okay = {
//     name: "sami",
//     health: "fine"
// }

// console.log(okay.health);




// const person_sodor = {
//     name: "Sodor Uddin",
//     age: 25,
//     profession: "developer",
//     salary: 25000,
//     married: true 
// }

// console.log(person_sodor.profession);

// const mySym = Symbol("key1")

// const jsUser = {
//     name: "Sami",
//     "full name": "Al Sami",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Dhaka",
//     email: "alsami1209@gmail.com",
//     isLoggedIn: false,
//     lastLogeinDays: ["Monday", "Saturday"]
// }

// // console.log(jsUser["location"]);
// // console.log(jsUser["full name"]);
// // console.log(jsUser[mySym]);


// jsUser.email = "alsami0055@gmail.com";
// // Object.freeze(jsUser)
// jsUser.email = "aibarchangehobena";
// // console.log(jsUser["email"]);


// jsUser.greeting = function(){
//     console.log("hello mySelf Sami")
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello my name is ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


// const tinderUser = new Object()   singe ton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sami"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Al",
            lastname: "Sami"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);