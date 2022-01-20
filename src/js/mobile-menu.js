(() => {
    const refs = {
      openModalBtn: document.querySelector('.btn-open'),
      closeModalBtn: document.querySelector('.close-menu-btn'),
      closeMobileBtn: document.querySelector('.close-mob-list'),
      modal: document.querySelector('.mob-menu'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeMobileBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();