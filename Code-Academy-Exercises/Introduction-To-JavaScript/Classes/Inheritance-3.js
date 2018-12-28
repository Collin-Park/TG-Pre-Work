class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])

/*
we can call the parent object by using the correct language, here we have a child of the parent
HospitalEmployee, called Nurses, nurses contains everything that HospitalEmployee contains
but has an additional certifications that need to be defined inside the object.
using the words extends, and super we can cut time in creating this object class.
*/
