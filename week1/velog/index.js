// Selector
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// DOM
const dropButtonText = $('.drop-box span');
const dropBox = $('.drop-box');
const dropBoxIcon = $('.drop-box i');
const dropItems = $('.drop-items');
const allDropItem = $$('.drop-item');

const body = $('body');
const cards = $('.cards');
const card = $('.card');
const modal = $('.modal');
const modalBox = $('.modal-box');

const cardContainer = $('.card-container');
const cardRow = $('.cards-row');
const leftButton = $('.button-left');
const rightButton = $('.button-right');

// 드롭박스 기능 구현
// 기능 1. 클릭 시 화살표 방향 변경
// 기능 2. 클릭 시 하위 메뉴 보이기, 숨기기
dropBox.addEventListener('click', (e) => {
    if(e.target.nodeName === 'LI') {
        [...allDropItem].forEach(element => element.classList.remove('selected'));
        dropButtonText.innerText = e.target.innerHTML;
        e.target.classList.add('selected');
    }
    dropItems.classList.toggle('hidden');
});

// 모달창 기능 구현
// 모달창 open 시 스크롤 막기
cards.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'I') {
        body.classList.add('no-scroll');
        modal.classList.remove('hidden');
        const cloneNode = e.target.closest('.card').cloneNode(true);
        cloneNode.classList.remove('card');
        modalBox.appendChild(cloneNode);
    }
})

// 모달창 닫기
modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
        modalBox.removeChild(modalBox.firstChild);
        modal.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
})

// 캐러셀 구현
let index = 0;

leftButton.addEventListener('click', () => {
    if (index) {
        index--;
        cardRow.style.transform = `translate3d(${-352 * index}px, 0, 0)`;
        cardRow.style.transition = 'all 0.5s';
    }
})

rightButton.addEventListener('click', () => {
    index++;
    cardRow.style.transform = `translate3d(${-352 * index}px, 0, 0)`;
    cardRow.style.transition = 'all 0.5s';
});