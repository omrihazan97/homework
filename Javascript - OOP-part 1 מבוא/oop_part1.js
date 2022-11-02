class users {
  constructor(Firstname, LastName, city) {
    this.arrays = [];
    this.Firstname = Firstname;
    this.LastName = LastName;
    this.city = city;
  }

  pushee(bookobj) {
    this.arrays.push(bookobj);
    console.log(this.arrays);
  }
}
