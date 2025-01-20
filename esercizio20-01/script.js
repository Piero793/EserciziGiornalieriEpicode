class User {
  constructor(firstname, lastname, age, location) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstname + " è più grande di " + otherUser.firstname;
    } else {
      return this.firstname + " è più piccolo di " + otherUser.firstname;
    }
  }
}

const Piero = new User("Piero", "Lacitignola", 31, "Monopoli");
console.log(Piero);

class User2 extends User {
  constructor(firstname, lastname, age, location) {
    super(firstname, lastname, age, location);
  }
}

const Mario = new User2("Mario", "Rossi", 40, "Milano");
console.log(Mario);

console.log(Piero.compareAge(Mario));
console.log(Mario.compareAge(Piero));
