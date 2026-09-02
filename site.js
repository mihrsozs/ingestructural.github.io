const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (header && menuButton && navigation) {
  const closeMenu = () => {
    header.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const willOpen = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });
}
