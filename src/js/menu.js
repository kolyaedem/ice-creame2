(() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
// })();

const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  nav: document.querySelectorAll('.menu__item-link'), //////////
};

refs.openMenuBtn.addEventListener('click', toggleModal);
refs.closeMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
  toggleClass();
  for (var i = 0; i < refs.nav.length; i++) {
    refs.nav[i].onclick = function (e) {
      toggleClass();
    };
  }
}
function toggleClass() {
  refs.menu.classList.toggle('is-open');
}
})();

