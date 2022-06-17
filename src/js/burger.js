import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('header__burger--active');
    menu?.classList.toggle('header__list--active');

    if (menu?.classList.contains('header__list--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__list--active');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('header__burger--active');
      menu.classList.remove('header__list--active');
      enableScroll();
    });
  });
})();
