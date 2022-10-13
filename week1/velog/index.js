// Selector
const $ = selector => document.querySelector(selector);

// DOM
const dropButtonText = $('.drop-box span');
const dropBox = $('.drop-box');
const dropBoxIcon = $('.drop-box i');
const dropItems = $('.drop-items');

const body = $('body');
const cards = $('.cards');
const card = $('.card');
const modal = $('.modal');
const modalBox = $('.modal-box');

// 드롭박스 기능 구현
// 기능 1. 클릭 시 화살표 방향 변경
// 기능 2. 클릭 시 하위 메뉴 보이기, 숨기기
dropBox.addEventListener('click', (e) => {
    if(e.target.nodeName === 'LI') {
        dropButtonText.innerText = e.target.innerHTML;
    }
    dropItems.classList.toggle('hidden');
});

// 모달창 기능 구현
// 모달창 open 시 스크롤 막기
cards.addEventListener('click', (e) => {
    body.classList.add('no-scroll');
    modal.classList.remove('hidden');
    const cloneNode = e.target.closest('.card').cloneNode(true);
    cloneNode.classList.remove('card');
    modalBox.appendChild(cloneNode);
})

// 모달창 닫기
modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
        modalBox.removeChild(modalBox.firstChild);
        modal.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
    console.log(e.target.className);
})