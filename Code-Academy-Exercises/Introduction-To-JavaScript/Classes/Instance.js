class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*
an instance is an object created from a class, with unique values created through the
unique arguments that are introduced into the constructor in the class.
here we define a class surgeon wich a constructor that takes two arguments,
two instances of the class is called as surgeonCurry and surgeonDurant.
*/
