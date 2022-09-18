let item = [
  [1, "הטלויזיה", 1000],
  [2, "הסוני", 3000],
  [3, "המחשב", 4000],
  [4, "המכונת כביסה", 1200],
];

// המערך החדש אליו אנו דוחפים פרטים מהמערך הישן
let shoppingCart = [];

function show(productID) {
  shoppingCart.push(item[productID]);
  renderCartFromArray();
}

function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = ""; //removes all the HTML content.
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div");
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + " עולה   " + shoppingCart[i][2] // מיקומים של המקומות במערך
    );
    // shoppingCart[i][1] + " עולה   " + shoppingCart[i][2]   _(i)_===["הטלויזיה", 1000],["הסוני", 3000], ["המחשב", 4000],["המכונת כביסה", 1200]
    //  תצוגת הערכים שלה במערך בעמצעות המשתנה

    let removeBtn = document.createElement("button");
    removeBtn.className = "butn";

    removeBtn.setAttribute("onclick", "removeProduct(" + i + ")");

    removeBtn.textContent = "remove";

    productHTML.appendChild(productDescription);

    productHTML.appendChild(removeBtn);

    document.getElementById("shoppingCart").appendChild(productHTML);
  }
}
function removeProduct(product) {
  shoppingCart.splice(product, 1); //removes the array item i.
  renderCartFromArray();
}
