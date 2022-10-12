// Selector
const $ = selector => document.querySelector(selector);

// DOM
const tagBox = $('.tag-box');
const tagInput = $('.tag-input');

// Input창에 텍스트 입력하고 엔터 누르면 태그 추가
tagInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerText = e.target.value;
        tagBox.insertBefore(tag, tagInput);
        e.target.value = '';
    }
})

// 태그 누르면 삭제
tagBox.addEventListener('click', (e) => {
    if (e.target.nodeName === 'SPAN') {
        tagBox.removeChild(e.target);
    }
})