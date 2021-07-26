"use strict";

class Car {
  constructor(model, speed) {
    this.model = model;
    this._speed = speed;
  }

  #engine = "amg";

  showCar = () => {
    console.log(
      `Автомобиль марки: ${this.model} ${this.engine},скорость ${this._speed} км/ч`
    );
  };

  get speed() {
    return this._speed;
  }

  set speed(speed) {
    if (typeof speed === "number" && speed > 110 && speed < 280) {
      this._speed = speed;
    } else {
      console.log("zzzz");
    }
  }
}

const bmw = new Car("x6", 220);
console.log(bmw.speed);
bmw.speed = 250;
bmw.showCar();
