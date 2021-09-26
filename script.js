var input = document.getElementById("userInput");
var saveBtn = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.querySelector("li");

function inputValidate() {
  return input.value.length;
}
function createItem() {
  var ToDoLi = document.createElement("li");
  ToDoLi.appendChild(document.createTextNode(input.value));
  ul.appendChild(ToDoLi);
  input.value = "";

  function corssOut() {
    ToDoLi.classList.toggle("done"); //اگه کلاسی با اسم دان باشه میاره و اگه نباشه برش میداره
  }
  ToDoLi.addEventListener("click", corssOut);


  var deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  ToDoLi.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",deleteItem);

  function deleteItem(){
      ToDoLi.classList.add("delete");
  }
}

function addListItemBtn() {
  if (inputValidate() > 0) {
    createItem();
  }
}
function addListItemPress(event) {
  if (inputValidate() > 0 && event.which === 13) {
    createItem();
  }
}

saveBtn.addEventListener("click", addListItemBtn);
input.addEventListener("keypress", addListItemPress);
