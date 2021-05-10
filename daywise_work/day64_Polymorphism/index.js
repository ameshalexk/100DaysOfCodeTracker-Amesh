class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic Animal Sound');
  }
}

class Dog extends Animal {
  makeSound() {
    super.makeSound();
    console.log('Woof');
  }
}

const a1 = new Animal('Dom');
const a2 = new Dog('Jeff');

a1.makeSound();
a2.makeSound();
