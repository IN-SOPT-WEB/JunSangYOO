// dom
const $todayInput = document.querySelector(".today-input");
const $tomorrowInput = document.querySelector(".tomorrow-input");
const $todayButton = document.querySelector(".today-button");
const $tomorrowButton = document.querySelector(".tomorrow-button");

const $todayList = document.querySelector(".today-list");
const $tomorrowList = document.querySelector(".tomorrow-list");

const addTodayTodo = () => {
  const $todo = document.createElement("li");
  $todo.classList.add("todo");
  $todo.innerText = $todayInput.value;
  $todayList.appendChild($todo);
  $todayInput.value = "";
};

const addTomorrowTodo = () => {
  const $todo = document.createElement("li");
  $todo.classList.add("todo");
  $todo.innerText = $tomorrowInput.value;
  $tomorrowList.appendChild($todo);
  $tomorrowInput.value = "";
};

$todayButton.addEventListener("click", addTodayTodo);
$tomorrowButton.addEventListener("click", addTomorrowTodo);
