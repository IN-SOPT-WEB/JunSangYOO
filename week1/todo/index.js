// dom
const $ = selector => document.querySelector(selector);

// display 버튼
const todayShowButton = $('.today-show_button');
const tomorrowShowButton = $('.tomorrow-show_button');
const bothShowButton = $('.both-show_button');

// 할 일 섹션
const todayBox = $('.today-todos');
const tomorrowBox = $('.tomorrow-todos');

// 오늘, 내일 할 일 작성 및 추가 요소
const todayInput = $(".today-input");
const tomorrowInput = $(".tomorrow-input");
const todayButton = $(".today-button");
const tomorrowButton = $(".tomorrow-button");

const todayList = $(".today-list");
const tomorrowList = $(".tomorrow-list");

// 선택된 할 일 섹션만 보여주기
todayShowButton.addEventListener('click', () => {
  todayBox.classList.remove('hidden');
  tomorrowBox.classList.add('hidden');
});

tomorrowShowButton.addEventListener('click', () => {
  todayBox.classList.add('hidden');
  tomorrowBox.classList.remove('hidden');
})

bothShowButton.addEventListener('click', () => {
  todayBox.classList.remove('hidden');
  tomorrowBox.classList.remove('hidden');
})

// 할 일 추가
const addTodo = day => {
  const todo = document.createElement("li");
  todo.classList.add("todo");
  if (day === 'today') {
    todo.innerText = todayInput.value;
    todayList.appendChild(todo);
    todayInput.value = "";
  } else {
    todo.innerText = tomorrowInput.value;
    tomorrowList.appendChild(todo);
    tomorrowInput.value = "";
  }
}

todayButton.addEventListener("click", addTodo.bind(null, 'today'));
tomorrowButton.addEventListener("click", addTodo.bind(null, 'tomorrow'));
