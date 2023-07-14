// navbar fixed
window.onscroll = function () {
  const section = document.getElementById('section');
  const fixedNav = section.offsetTop;

  if(window.pageYOffset > fixedNav) {
    section.classList.add('navbar-fixed');
  } else {
    section.classList.remove('navbar-fixed');
  }
};