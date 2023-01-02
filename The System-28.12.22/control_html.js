export class control_html {
  tow() {
    let butn2 = document.getElementById("add_butn");
    butn2.addEventListener("click", () => {
      document.querySelector(".Add_employee").style.display = "block";
      document.querySelector(".editing_employee").style.display = "none";
      document.querySelector(".editing_employee").style.display = "none";

      document.querySelector(".Searchworker").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }
  find2() {
    let butnfinf = document.getElementById("Search");
    butnfinf.addEventListener("click", () => {
      document.querySelector(".Searchworker").style.display = "block";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".editing_employee").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }

  show__worekr() {
    let show_worekr = document.getElementById("entry_butn");
    show_worekr.addEventListener("click", () => {
      document.querySelector(".spece").style.display = "block";
      document.querySelector(".del").style.display = "block";
      document.querySelector(".displaye").style.display = "block";
      document.querySelector(".editing_employee").style.display = "block";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".Searchworker").style.display = "none";
      document.querySelector(".in_out").style.display = "none";
    });
  }

  in_out() {
    let inn_outt = document.getElementById("bun_inout");
    inn_outt.addEventListener("click", () => {
      document.querySelector(".in_out").style.display = "block";
      document.querySelector(".spece").style.display = "none";
      document.querySelector(".del").style.display = "none";
      document.querySelector(".displaye").style.display = "none";
      document.querySelector(".Add_employee").style.display = "none";
      document.querySelector(".editing_employee").style.display = "none";
      document.querySelector(".Searchworker").style.display = "none";
    });
  }
}
