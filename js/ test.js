"use strict";

function User(name, age) {
  this.name = name;
  let userAge = age; // encapsulation

  this.say = function () {
    console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
  };

  // используем методы сеттеры и геттеры
  this.getAge = function () {
    return userAge;
  };

  this.setAge = function (age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("Недопустимое значение!");
    }
  };
}
const ivan = new User("Ivan", 27);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());
ivan.name = "Alex";

ivan.say();
