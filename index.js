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

document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.querySelectorAll('.contact-btn');
  const mapDiv = document.querySelector('.contact-map');
  const inputDiv = document.querySelector('.contact-input');

  contactBtn.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const dataValue = button.dataset.btn;
      
      // 기존에 추가된 클래스 제거
      contactBtn.forEach(function(btn) {
        btn.classList.remove('btn-active');
      });

      // 클릭된 버튼에 'active' 클래스 추가
      button.classList.add('btn-active');

      // 버튼의 dataset 값에 따라 처리
      mapDiv.classList.toggle('none', dataValue !== 'map');
      inputDiv.classList.toggle('none', dataValue !== 'input');
    });
  });

});


// 레슨문의 클릭