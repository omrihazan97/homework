class User {
  constructor(Firstname, LastName, city) {
    this.Firstname = Firstname;
    this.LastName = LastName;
    this.city = city;
    this.loans = [];
  }

  loan(book) {
    if (book.canBorrow) {
      this.loans.push(book);
    }
  }
}
let user1 = new User("ooo", "mmmm", "ramle");
let user2 = new User("eeeee", "ddddd", "Jerusalem");
let user3 = new User("Ayala", "Shulman", "Tel-aviv");

class Book {
  constructor(title, author, canBorrow) {
    this.title = title;
    this.author = author;
    this.canBorrow = canBorrow;
  }
}

let book = new Book("Tom Sawyer", "Mark Twain", true);
let book2 = new Book("Encyclopedia Britannica", "", false);
let book3 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  true
);
let book4 = new Book("Oxford Dictionary of the English Language", "", false);
let book5 = new Book(
  "Adventures of Sherlock Holmes",
  "Arthur Conan Doyle",
  true
);

user1.loan(book);
user1.loan(book3);
user2.loan(book);
user2.loan(book2);
user3.loan(book3);
user3.loan(book4);

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
          element.loans.map((book) => book.title)
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
