const modal = document.querySelector('.modal');
const openModal = document.querySelector('.modalButton_open');
const closeModal = document.querySelector('.modalButton_close');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
