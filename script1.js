
const openModals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const open = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const close = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let openModal of openModals) {
    openModal.addEventListener('click', open);
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        close();
    }
})
