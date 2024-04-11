const launchModal = document.getElementById('launchModal');
const modalDiv = document.getElementById('modalDiv');

const x = document.getElementById('xbutton');
const btnClose = document.getElementById('btnClose');
const btnSave = document.getElementById('btnSave');


function openModal() {
    modalDiv.classList.toggle('modalDivClosed');
}
launchModal.addEventListener('click', openModal);


function closeWindowbyClose () {
        if (modalDiv.classList.contains('modalDivClosed')){
            modalDiv.classList.remove('modalDivClosed');
        }
 }
x.addEventListener('click', closeWindowbyClose);
btnClose.addEventListener('click', closeWindowbyClose);


btnSave.onclick = () => {
    console.log('Все окей!');
}

