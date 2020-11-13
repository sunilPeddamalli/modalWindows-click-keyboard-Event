'use strict';

const showModal = document.querySelectorAll(".show-modal");
const Modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const shutModal = function () {
    Modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", function () {
        Modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

closeModal.addEventListener("click", shutModal)

overlay.addEventListener("click", shutModal)

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        shutModal();
    }
})