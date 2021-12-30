const modalLogin = document.querySelector(".modal-login");
const modalSignup = document.querySelector(".modal-signup");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.login');
const btnOpenModalSignup=document.querySelector('.btn')
const closeModal = function (e) {
  e.preventDefault(e);
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  modalLogin.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openModalsignup=function () {
  modalSignup.classList.remove('hidden')
  overlay.classList.remove('hidden')
  
}
const closeModalSignup=function(){
  modalSignup.classList.add('hidden')
  
}
btnOpenModal.addEventListener('click', () => {
  openModal()
 
});
btnCloseModal.addEventListener('click',()=>{closeModal()})
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !(modal.classList.contains('hidden'))) {
    closeModal();
  }
});
btnOpenModalSignup.addEventListener('click',openModalsignup)
overlay.addEventListener('click',closeModalSignup)