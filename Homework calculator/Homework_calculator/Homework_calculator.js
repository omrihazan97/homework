function Task5() {
  // תרגיל מספר 5
  let numberone = +document.getElementById("numberone").value;
  let numbertow = +document.getElementById("numbertow").value;
  let finallnumber = document.getElementById("finallnumber").value;
  let finallage;

  if (finallnumber == "P") {
    //השוואה של הערכים-ובדיקה
    finallage = numberone + numbertow;
  } else if (finallnumber == "M") {
    finallage = numberone - numbertow;
  } else if (finallnumber == "H") {
    finallage = numberone / numbertow;
  } else if (finallnumber == "X") {
    finallage = numberone * numbertow;
  }
  console.log(finallage);
  // alert(finallage);
  document.getElementById("sum").innerText = finallage;
}
