// Selector
const $ = selector => document.querySelector(selector);

// DOM
const tagBox = $('.tag-box');
const tagInput = $('.tag-input');

// Input창에 텍스트 입력하고 엔터 누르면 태그 추가
// 로컬 스토리지에 해당 태그 추가
tagInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        if (!localStorage.getItem('tags')) {
            localStorage.setItem('tags', JSON.stringify([e.target.value]));
        } else {
            const tagAry = JSON.parse(localStorage.getItem('tags'));
            tagAry.push(e.target.value);
            localStorage.setItem('tags', JSON.stringify(tagAry));
        }
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerText = e.target.value;
        tagBox.insertBefore(tag, tagInput);
        e.target.value = '';
    }
})

// 태그 누르면 삭제
// 로컬 스토리지에서 해당 태그 찾아서 삭제
tagBox.addEventListener('click', (e) => {
    if (e.target.nodeName === 'SPAN') {
        const tagAry = JSON.parse(localStorage.getItem('tags'));
        tagAry.splice(tagAry.indexOf(String(e.target.innerText)), 1);
        localStorage.setItem('tags', JSON.stringify(tagAry));
        tagBox.removeChild(e.target);
    }
})

// 첫 로딩 시 로컬스토리지 데이터 가져오기
window.addEventListener('load', () => {
    JSON.parse(localStorage.getItem('tags'))?.reverse().map(tag => {
        tagBox.insertAdjacentHTML('afterbegin', `<span class="tag">${tag}</span>`);
    })
})