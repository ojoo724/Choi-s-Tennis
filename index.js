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
  // 오시는길, 레슨문의 버튼 클릭
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

  // 주소 복사하기 버튼 클릭
  const copyBtn = document.querySelector('#copyBtn');
  const addr = document.querySelector('#addr');
  const addrTxt = document.querySelector('#addrTxt');
  const copyDone = document.querySelector('#copy-done');

  copyBtn.addEventListener('click', function() {
    
    // 클릭된 버튼의 텍스트를 복사
    copyTextToClipboard(addr.innerText);
    addr.classList.add('none');
    addrTxt.classList.add('none');
    copyDone.classList.remove('none');
    
    // 복사 완료 팝업
    setTimeout(() => {
      addr.classList.remove('none');
      addrTxt.classList.remove('none');
      copyDone.classList.add('none');
    }, 1500);
  });

  // 문의하기
  const ctctBtn = document.querySelector('#ctctBtn');
  const ctctName = document.getElementById('ctctName');
  const ctctEmail = document.getElementById('ctctEmail');

  ctctBtn.addEventListener('click', function() {
    if(ctctName.value === ''){
      alert("이름을 입력해주세요.")
    }else if(ctctEmail.value === ''){
      alert("이메일을 입력해주세요.")
    }else{
      alert("감사합니다.")
      document.getElementById('frm').reset()
    }
  });

});

// 클립보드에 텍스트 저장
function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

