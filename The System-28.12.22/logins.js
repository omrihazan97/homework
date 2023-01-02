export class loginses {
  log() {
    let user_and_password = ["1", 1];
    let butnconf = document.getElementById("butncon");
    butnconf.addEventListener("click", () => {
      let uservalue = document.getElementById("user1").value;
      let passwordValue = document.getElementById("password1").value;
      if (
        uservalue == user_and_password[0] &&
        passwordValue == user_and_password[1]
      ) {
        alert("good");
        document.querySelector(".log_div").style.display = "none";
        document.querySelector(".buttons").style.display = "flex";
        // document.querySelector(".row").style.display = "flex";
      } else {
        alert(" try again ");
      }
    });
  }
}
