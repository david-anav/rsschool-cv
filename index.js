const certif = document.querySelector(".python-certificate");

window.onload = () => {
  certif.addEventListener("click", (evnt) => {
    if (evnt.target) {
      createdModal(certif);
    }
    const modal = document.querySelector('.modal-bg')
    modal.addEventListener('click', (ev)=>{
      if(modal.contains(ev.target)){
        modal.classList.remove('modal-bg')
      }
    })
  });
};

const createdModal = (child) => {
  const fragmentModal = new DocumentFragment();
  const bgModal = document.createElement("div");
  bgModal.className = "modal-bg";
  const modal = document.createElement("dialog");
  modal.className = "md-dialog";
  modal.appendChild(child);
  bgModal.appendChild(modal);
  fragmentModal.appendChild(bgModal);
  document.body.appendChild(fragmentModal);
};
