class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(this.name, this.age);
  }
}

const p1 = new Person("Neha", 25);
p1.getDetails();
