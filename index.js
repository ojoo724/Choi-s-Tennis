window.addEventListener('scroll', function() {
    const header = document.querySelector('#header');
    const title = document.querySelector('.title-logo');
    const menu = document.querySelectorAll('.menu-item');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 350) {
      header.classList.add('fixed');
      title.classList.add('fixed');
      menu.forEach(function(e) {
        e.classList.add('fixed'); 
      });
    } else {
      header.classList.remove('fixed'); 
      title.classList.remove('fixed');
      menu.forEach(function(e) {
        e.classList.remove('fixed'); 
      });
    }
});

