import { loginses } from "./logins.js";
import { control_html } from "./control_html.js";
//מחלקה האחראית להופעתם בדף האינטרנט
class show {
  printworkers() {
    let show = document.getElementById("showup");
    show.addEventListener("click", () => {
      printEmployees(workers);
    });
  }
}
//מחלקת מערך העובדים והוספתם
let workers = [];
class worker {
  constructor(name, last_name, id, number_work, work_hours = []) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.number_work = number_work;
    this.work_hours = work_hours;
  }
  //מתודה המייצרת עובדים
  attachListernerToButton() {
    document.getElementById("butn1").addEventListener("click", () => {
      let w1 = new worker(
        document.getElementById("input2").value,

        document.getElementById("input3").value,

        document.getElementById("input1").value,

        document.getElementById("input4").value
      );

      console.log(workers);
      workers.push(w1);
      localStorage.setItem("worker", JSON.stringify(workers));
      printEmployees(workers);
      alert("success");
    });
  }
  //מתודה העורכת את הנתונים של העובד ושמירתם באחסון
  eedd() {
    document.getElementById("ebutn1").addEventListener("click", () => {
      let found3 = new find_js_del().findSearch3();
      if (found3) {
        workers[0].id = document.getElementById("einput1").value;
        workers[0].name = document.getElementById("einput2").value;
        workers[0].last_name = document.getElementById("einput3").value;
        workers[0].number_work = document.getElementById("einput4").value;
        alert("work");
        console.log(workers);
        localStorage.setItem("worker", JSON.stringify(workers));
      }
    });
  }
  //מתודה המוסיפה שעות לעובד
  hours() {
    document.getElementById("ok").addEventListener("click", () => {
      let houres = new worker(
        document.getElementById("hours_in").value,
        document.getElementById("minute_in").value,
        document.getElementById("hours_out").value,
        document.getElementById("minute_out").value
      );
    });
  }
  //מתודה המחשבת תאריך שעות וכסף ודוחפת למערך העובדים
  fun_inout() {
    this.#fun_inout2();
  }
  #fun_inout2() {
    let buton = document.getElementById("ok");
    buton.addEventListener("click", () => {
      let datee = document.getElementById("datee").value;
      let hours_Entrance = Number(document.getElementById("hours_in").value);
      let minute_Entrance = Number(document.getElementById("minute_in").value);
      let placeholder_Entrance = 60;
      let sum_Entrance = minute_Entrance / placeholder_Entrance;
      let gg_Entrance = sum_Entrance + hours_Entrance;
      console.log(gg_Entrance);
      // _______________________________________________________
      let hours_exit = Number(document.getElementById("hours_out").value);
      let minute_exit = Number(document.getElementById("minute_out").value);
      let placeholder_exit = 60;
      let sum_exit = minute_exit / placeholder_exit;
      let gg_exit = sum_exit + hours_exit;
      console.log(gg_exit);
      let hisov = gg_exit - gg_Entrance;
      let sum = hisov * 30;
      console.log(hisov);
      let found = new find_js_del().findSearch2();
      if (datee == "") {
        alert("The date is empty");
      } else if (found) {
        found.work_hours.push({ datee, hisov, sum });
        alert("work");
        localStorage.setItem("worker", JSON.stringify(workers));
      }
    });
  }
}
//פונקציה ציבורית המייצרת רשימה של עובדים בתצוגה
function printEmployees(workers) {
  let u = document.createElement("ul");
  workers.forEach((worker) => {
    // let cbox = document.createElement("input");
    // cbox.setAttribute("id", worker.name);
    // cbox.setAttribute("type", "checkbox");
    let liItem = document.createElement("li");
    let liContent = document.createTextNode(
      worker.name + " " + worker.last_name
    );
    liItem.appendChild(liContent);
    // u.appendChild(cbox);
    u.appendChild(liItem);
  });
  document.getElementById("displaye").innerHTML = "";
  document.getElementById("displaye").appendChild(u);
}

// ___________________________________
//מחלקה בעלת מתודות האחראיות לבצע חיפוש והתאמה של ערכים מהקלטים
class find_js_del {
  find1() {
    let inSearch = document.getElementById("nameofemp"); //INPUT
    let btnSearch = document.getElementById("find_w"); //כפתור
    btnSearch.addEventListener("click", () => {
      let found = workers.filter(
        (x) =>
          x.id === inSearch.value ||
          x.name == inSearch.value ||
          x.last_name == inSearch.value ||
          x.number_work == inSearch.value
      );

      if (found) {
        printEmployees2(found);
        document.getElementById("tableID").innerHTML = found[0].id;
        document.getElementById("tableFirstName").innerHTML = found[0].name;
        document.getElementById("tableLastName").innerHTML = found[0].last_name;
        let totalHours = 0;
        let totalsum = 0;
        found[0].work_hours.forEach((element) => {
          if (element.hisov && element.sum) {
            totalHours += element.hisov;
            totalsum += element.sum;
          }
        });
        document.getElementById("tableHours").innerHTML = totalHours + "⌚";
        document.getElementById("sum").innerHTML = totalsum + "₪";
      } else {
        console.log("not in array!");
      }
    });
  }

  findSearch2() {
    let inSearch2 = document.getElementById("nameofemp2"); //INPUT
    return workers.find(
      (x) =>
        x.id === inSearch2.value ||
        x.name == inSearch2.value ||
        x.last_name == inSearch2.value ||
        x.number_work == inSearch2.value
    );
  }

  findSearch3() {
    let inSearch2 = document.getElementById("eSearch"); //INPUT
    return workers.find(
      (x) =>
        x.id === inSearch2.value ||
        x.name == inSearch2.value ||
        x.last_name == inSearch2.value ||
        x.number_work == inSearch2.value
    );
  }
  //האחראית השמירה  באחסון
  SON() {
    let localWorker = localStorage.getItem("worker");
    if (localWorker) {
      JSON.parse(localWorker).forEach((x) => {
        workers.push(
          new worker(x.name, x.last_name, x.id, x.number_work, x.work_hours)
        );
      });
    }
  }
  //מתודה האחראית למחוק עובדים לפי תז
  delet() {
    let deleteUserBtn = document.getElementById("deleteUser");
    deleteUserBtn.addEventListener("click", () => {
      let idEmployee = document.getElementById("input_delete").value;
      workers.forEach((element, i) => {
        if (element.id == idEmployee) {
          workers.splice(i, 1);
          localStorage.setItem("worker", JSON.stringify(workers));
          printEmployees(workers);
          alert(
            "After deleting a user, you should reconnect to the site. and reload the page"
          );
        }
      });
    });
  }
  //מתודה החראית כביכול ליצרה של עובד אחרי עריכה
  editing() {
    let w2 = new worker(
      document.getElementById("einput1").value,

      document.getElementById("einput2").value,

      document.getElementById("einput3").value,

      document.getElementById("einput4").value
    );

    console.log(workers);
    workers.push(w2);
    localStorage.setItem("worker", JSON.stringify(workers));
    printEmployees(workers);
  }
}
//פוקנציה המייצרת טבלה של נתונים על העובד לפי בקשה תעודת זהות
function printEmployees2(found) {
  document.getElementById("main_table").innerHTML = "";
  found[0].work_hours.forEach((element) => {
    let tr = document.createElement("tr");
    document.getElementById("main_table").appendChild(tr);
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let tdtaxt1 = document.createTextNode(found[0].id);
    let tdtaxt2 = document.createTextNode(found[0].name);
    let tdtaxt3 = document.createTextNode(found[0].last_name);
    let tdtaxt4 = document.createTextNode(element.hisov + "⌚");
    let tdtaxt5 = document.createTextNode(element.datee);
    td1.appendChild(tdtaxt1);
    td2.appendChild(tdtaxt2);
    td3.appendChild(tdtaxt3);
    td4.appendChild(tdtaxt4);
    td5.appendChild(tdtaxt5);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  });
}
//כל פקודות ההפעלה
let event_one_login = new loginses(); //login
event_one_login.log();
let button_event_add_butn = new control_html(); //1
button_event_add_butn.tow();
let button_event_Search = new control_html(); //2
button_event_Search.find2();
let button_event_entry_butn = new control_html(); //3
button_event_entry_butn.show__worekr();
let button_event_bun_inout = new control_html(); //4
button_event_bun_inout.in_out();
let button_event_ok = new worker();
button_event_ok.fun_inout(); //חישוב
let printn = new show(); //הופעה
printn.printworkers(); ///לא לגעת/
let start_worker = new worker();
start_worker.attachListernerToButton();
let hou = new worker();
hou.hours();
let finds = new find_js_del();
finds.find1();
let findSearch2 = new find_js_del();
findSearch2.findSearch2();
let jsom = new find_js_del();
jsom.SON();
let del = new find_js_del();
del.delet();
// let ee = new find_js_del();
// ee.editing();
let a3 = new worker();
a3.eedd();
let a4 = new find_js_del();
a4.findSearch3();
