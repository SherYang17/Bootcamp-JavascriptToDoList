const list = document.getElementById("liList");
const textField = document.getElementById("userText");
const btn = document.getElementById("clickBtn");

function addTodo() {
  const addToListText = textField.value;

  if (addToListText.trim() === "") {
    return;
  }

  const addLi = document.createElement("li");
  addLi.textContent = addToListText;
  addLi.addEventListener("click", removeTodo);

  list.appendChild(addLi);

  textField.value = "";

  const todos = list.getElementsByTagName("li");
  for (let i = 0; i < todos.length; i++) {
    if (i % 2 === 0) {
      todos[i].style.backgroundColor = "#8AAAE5";
    } else {
      todos[i].style.backgroundColor = "#FCEDDA";
    }
  }
}

function removeTodo() {
  this.remove();
}



btn.addEventListener("click", addTodo);
btn.addEventListener("keydown", addTodo);





// https://stackoverflow.com/questions/27032628/change-color-for-every-second-ul-li-with-a-for-loop
