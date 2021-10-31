const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDoList");
let toDos = [];

const TODOS_KEY = "ToDoList";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function removeToDoList(clickedButton) {
  const li = clickedButton.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDos(newToDoObj) {
  // create list from the submited value of input.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  //JS에서 만든 객체들을 HTML에 삽입하기
  toDoList.appendChild(li);
  li.id = newToDoObj.id;
  li.appendChild(span);
  span.innerText = newToDoObj.text;
  li.appendChild(button);
  button.innerText = "  ❌";

  button.addEventListener("click", removeToDoList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  let newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  saveToDos();
  toDoInput.value = "";
  paintToDos(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDos);
}
