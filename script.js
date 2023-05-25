var navbar = document.getElementById('navbar');
var prevScrollPos = window.pageYOffset;
var isScrollingUp = false;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    if (isScrollingUp) {
      navbar.classList.remove('navbar-fade');
      isScrollingUp = false;
    }
  } else {
    // Scrolling down
    navbar.classList.add('navbar-fade');
    isScrollingUp = true;
  }
  
  prevScrollPos = currentScrollPos;
};




