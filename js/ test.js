"use strict";

class User {
  constructor(name, age) {
    this.name = name;
    //let userAge = age; // encapsulation
    //this.userAge = age; // сделали св-во публичным
    this._age = age; // сделали св-во приватным encapsulation
  }

  //surname = "Ivanov"; // св-во объекта вне конструктора
  #surname = "Ivanov"; // # делает св-во приватным

  // методы можем задать в качестве => чтобы не терять контекст(контекстом будет определенный экземпляр класса - новый объект)
  say = () => {
    console.log(
      `Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`
    );
  };

  // используем название св-ва аксессора
  get age() {
    return this._age;
  }

  // используем название св-ва аксессора
  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Недопустимое значение!");
    }
  }
}
const ivan = new User("Ivan", 27);
console.log(ivan.age); // get
ivan.age = 99; // set
console.log(ivan.age);
console.log(ivan.sername); // undefined
ivan.say();
