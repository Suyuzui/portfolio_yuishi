const responsive_menu_btn = document.querySelector('.responsive_btn');
responsive_menu_btn.addEventListener('click', () => {
  responsive_menu_btn.classList.toggle('active');
  const header_menu_detail = document.querySelector('.header_nav');
    header_menu_detail.classList.toggle('menu_active');
});

//function Toggle_menu() {
//    const header_menu_detail = document.querySelector('.header_nav');
//    header_menu_detail.classList.toggle('menu_active');

//  }