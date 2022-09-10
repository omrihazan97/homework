// alert("שלום הגעתה למחשבון הקש את סימן הפעולה הנדרשת");
// answer1 = prompt("+,-,x,/");
// if (answer1 == "+") {
//   let firstnumber = Number(prompt("הקש מספר "));
//   let secondnumber = Number(prompt("הקש מספר "));
//   alert(firstnumber + secondnumber);
// } else if (answer1 == "-") {
//   let firstnumber = Number(prompt("הקש מספר "));
//   let secondnumber = Number(prompt("הקש מספר "));
//   alert(firstnumber - secondnumber);
// } else if (answer1 == "x") {
//   let firstnumber = Number(prompt("הקש מספר "));
//   let secondnumber = Number(prompt("הקש מספר "));
//   alert(firstnumber * secondnumber);
// } else if (answer1 == "/") {
//   let firstnumber = Number(prompt("הקש מספר "));
//   let secondnumber = Number(prompt("הקש מספר "));
//   alert(firstnumber / secondnumber);
// }

// alert("שלום הגעתה למחשבון הקש את סימן הפעולה הנדרשת");
// let answer1 = prompt("+,-,x,/");
// let oper = ["+", "-", "x", "/"];
// if (!oper.includes(answer1)) {
//   alert("תתמיד בפורמט.");
// } else {
//   let firstnumber = Number(prompt("הקש מספר "));
//   let secondnumber = Number(prompt("הקש מספר "));
//   if (isNaN(firstnumber) || isNaN(secondnumber)) {
//     alert("הקש מספרים ולא משהו אחר");
//   } else {
//     if (answer1 == "+") {
//     } else if (answer1 == "-") {
//       alert(firstnumber - secondnumber + "התשובה היא");
//     } else if (answer1 == "x") {
//       alert(firstnumber * secondnumber + "התשובה היא");
//     } else if (answer1 == "/") {
//       alert(firstnumber / secondnumber + "התשובה היא");
//     }
//     alert("תודה ");
//   }
// }
alert("שלום הגעתה למחשבון הקש את סימן הפעולה הנדרשת");
let answer1 = prompt("+,-,x,/");
let oper = ["+", "-", "x", "/"];
if (!oper.includes(answer1)) {
  alert("תתמיד בפורמט.");
  location.reload();
} else {
  let firstnumber = Number(prompt("הקש מספר "));
  let secondnumber = Number(prompt("הקש מספר "));
  if (isNaN(firstnumber) || isNaN(secondnumber)) {
    alert("הקש מספרים ולא משהו אחר");
    location.reload();
  } else {
    if (answer1 == "+") {
      alert(firstnumber + secondnumber + "התשובה היא");
    } else if (answer1 == "-") {
      alert(firstnumber - secondnumber + "התשובה היא");
    } else if (answer1 == "x") {
      alert(firstnumber * secondnumber + "התשובה היא");
    } else if (answer1 == "/") {
      alert(firstnumber / secondnumber + "התשובה היא");
    }
    alert("תודה ");
    location.reload();
  }
}
