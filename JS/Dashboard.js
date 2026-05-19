let menuBtn = document.getElementById('menu-btn');
let MobileMenu = document.getElementById('mobile-menu');
let bar = document.getElementById('bar');
let isOpen = false;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    MobileMenu.classList.toggle('open', isOpen);
    if (isOpen) {
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
    } else {
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    }
});

MobileMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        isOpen = false;
        MobileMenu.classList.remove('open');
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
    });
});
