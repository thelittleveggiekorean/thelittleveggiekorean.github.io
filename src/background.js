const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
const choosenImg = Math.ceil(Math.random() * images.length);
const wrapper = document.getElementById("todo_wrapper");

// const bgImg = document.createElement("img");
//create html element from JS
console.log(wrapper);
wrapper.style.backgroundImage = `url(./img/${choosenImg}.jpg)`;
