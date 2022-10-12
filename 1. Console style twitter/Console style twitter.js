function Users(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];

  this.addFollower = function (someUser) {
    this.followers.push(someUser);
    someUser.iFollow.push(this);
  };

  this.sendMessage = function (myPost) {
    this.followers.forEach((follower) => {
      follower.getMessage(this.userName + " " + myPost);
    });
  };
  this.getMessage = function (myPost) {
    console.log(myPost + " " + userName);
  };
}

let myUser1 = new Users("idan");
let myUser2 = new Users("eden");
let myUser3 = new Users("mor");
let myUser4 = new Users("dor");

// Ayala<Ben
myUser1.addFollower(myUser2);
// Ayala<Yaniv
myUser1.addFollower(myUser3);

// Ayala------------myPost
myUser1.sendMessage("hello");

// Ben<omri
myUser2.addFollower(myUser4);
// -Ben------------myPost
myUser2.sendMessage("hi");

console.log("followers user1");
console.log(myUser1.followers);
