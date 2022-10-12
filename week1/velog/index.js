// Selector
const $ = selector => document.querySelector(selector);

// DOM
const dropButtonText = $('.drop-box span');
const dropBox = $('.drop-box');
const dropBoxIcon = $('.drop-box i');
const dropItems = $('.drop-items');

// 드롭박스 기능 구현
// 기능 1. 클릭 시 화살표 방향 변경
// 기능 2. 클릭 시 하위 메뉴 보이기, 숨기기
dropBox.addEventListener('click', (e) => {
    if(e.target.nodeName === 'LI') {
        dropButtonText.innerText = e.target.innerHTML;
    }
    dropItems.classList.toggle('hidden');
});