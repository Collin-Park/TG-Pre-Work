class HospitalEmployee {
  constructor(name){
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

/*
here we created a parent class, hostpital employee, later we'll create two subclasses,
doctors and nurses.
*/
