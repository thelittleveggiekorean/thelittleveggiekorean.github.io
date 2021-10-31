const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
const todoForm = document.querySelector("#toDoForm");

const HIDDEN_CLASSNAME = "hidden"; //string 만 포함하는 변수는 uppercase로 naming 한다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
  loginInput.value = "";
}

function paintGreetings(username) {
  greeting.innerHTML = `Morning ${username}, how you want to make your day?`; //변수와 string을 합칠 때 사용
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}

//function의 첫 번째 argument는 방금 일어난 event에 대한 내용
