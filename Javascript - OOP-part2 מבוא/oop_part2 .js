class Users {
  constructor(Firstname, LastName, city) {
    this.Firstname = Firstname;
    this.LastName = LastName;
    this.city = city;
    this.books = [];
  }

  pushee(book) {
    this.books.push(book);
  }
}
let user1 = new Users("ooo", "mmmm", "ramle");
let user2 = new Users("eeeee", "ddddd", "Jerusalem");
let user3 = new Users("Ayala", "Shulman", "Tel-aviv");

user1.pushee("Book1");
user1.pushee("Book2");
user2.pushee("Book3");
user2.pushee("Book4");
user3.pushee("Book5");
user3.pushee("Book6");

class BookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.Firstname +
          " " +
          element.LastName +
          " from " +
          element.city +
          " borrows this books: " +
          element.books
      );
    });
  }
}
let a = new BookReport("report1");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
