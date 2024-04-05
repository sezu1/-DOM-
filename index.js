const launchModal = document.getElementById('launchModal')
const modalDiv = document.getElementById('modalDiv')
const x = document.getElementById('xbutton')
const btnClose = document.getElementById('btnClose')
const btnSave = document.getElementById('btnSave')


function openModal() {
    modalDiv.style.display = 'block'
}
launchModal.addEventListener('click', openModal);



function closeWindowbyX () {
    modalDiv.style.display = 'none'
}
x.addEventListener('click', closeWindowbyX);


function closeWindowbyClose () {
    modalDiv.style.display = 'none'
}
btnClose.addEventListener('click', closeWindowbyClose);


btnSave.onclick = () => {
    console.log('Все окей!');
}

