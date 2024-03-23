<<<<<<< HEAD

const titleSection = document.querySelectorAll(".sctn-title");
const nameHeader = document.querySelector(".header__name");
const certificate =  document.querySelector(".python-certificate");;
window.onload = () =>{
  weightToSection(titleSection);


  certificate.addEventListener("click", (evnt) => {
    if (evnt.target) {
      createdModal(certificate);
    }
    const modal = document.querySelector(".modal-bg");
    modal.addEventListener("click", (ev) => {
      if (modal.contains(ev.target)) {
        modal.classList.remove("modal-bg");
      }
    });
  });


}

function weightToSection(title){
  title.forEach(element => {
    element.textContent = element.textContent.toUpperCase();

  });
}
=======
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
>>>>>>> ae0e7a5147eb6482eb916e04a377548705891624

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
