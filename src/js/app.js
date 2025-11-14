'use strict'

import form from "./form.js";
import ticket from "./ticket.js";

const body = document.querySelector('body');

let state = form();
body.insertAdjacentHTML('afterbegin', state);





// selectors
const submitBtn = document.querySelector('.submitBtn');
const iconImg = document.querySelector('.iconImg');
const uploadArea = document.querySelector('.uploadArea');
const inputFile = document.querySelector('.input');
const uploadText = document.querySelector('.upload-text');
const editImgBtn = document.querySelector('.edit-image');
const changeImgBtn = document.querySelector('.change-image');
const removeImgBtn = document.querySelector('.remove-image');
const overlay = document.querySelector('.overlay');
const sizeError = document.querySelector('.size-error');
const activeText = document.querySelector('.active-text');
const emailInput = document.querySelector('.email-value');
const emailError = document.querySelector('.email-error');
const giveUser = document.querySelector('.giveUser');
const giveFullName = document.querySelector('.giveFullName');





// functions
overlay.addEventListener('click', function (e) {
    e.preventDefault();
});

const ErrorText = function () {
    sizeError.classList.remove('hidden');
    activeText.classList.add('hidden');
};

const correctText = function () {
    sizeError.classList.add('hidden');
    activeText.classList.remove('hidden');
};

const emailType = function (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const status = emailPattern.test(email);
    if (!status) {
        emailError.classList.remove('hidden');
        return false;
    }
    if (status) {
        emailError.classList.add('hidden');
        return true;
    }
};

// EVENTS

//load image 
inputFile.addEventListener('change', function (e) {
    e.preventDefault();
    console.log(inputFile.files[0]);
    console.log(inputFile.files[0].size);
    if (inputFile.files[0].size >= 512_000) {
        ErrorText();
        return;
    }
    correctText();
    iconImg.src = URL.createObjectURL(inputFile.files[0]);
    uploadText.classList.add('hidden');
    editImgBtn.classList.remove('hidden');
    uploadArea.style.cursor = 'default';
    // console.log(inputFile.files);
    overlay.classList.remove('hidden');
});


// remove image
removeImgBtn.addEventListener('click', function (e) {
    e.preventDefault();
    inputFile.value = '';
    console.log(inputFile.files);
    iconImg.src = './assets/images/icon-upload.svg';
});

// change image
changeImgBtn.addEventListener('click', function (e) {
    e.preventDefault();
    inputFile.click();
});

// submit info
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (inputFile.files.length === 0) ErrorText();
    emailType(emailInput.value);
    if (inputFile.files.length !== 0 && emailType(emailInput.value)) {
        body.innerHTML = '';
        state = ticket();
        body.insertAdjacentHTML('afterbegin', state);
        const getImg = document.querySelector('.get-image');
        const getEmail = document.querySelector('.getEmail');
        const getFullName = document.querySelectorAll('.getFullName');
        const getUser = document.querySelector('.getUser');
        console.log(getEmail);
        getImg.src = iconImg.src;
        getEmail.textContent = emailInput.value;
        getFullName.forEach(name => name.textContent = giveFullName.value);
        getUser.textContent = giveUser.value;
    }
});