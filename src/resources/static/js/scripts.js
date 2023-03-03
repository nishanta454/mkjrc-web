const home = (() => {
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  const activateNavScroll = () => {
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
      });
    }
  };

  const collapse = () => {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link'),
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  };

  const init = () => {
    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    addEventListener('scroll', home.navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    activateNavScroll();

    // Collapse responsive navbar when toggler is visible
    collapse();
  };

  return {
    init,
  };
})();

const contact = (() => {
  const init = () => {
    window.intlTelInput(document.querySelector('#cphone'));
  };
  return {
    init,
  };
})();

const jyotish = (() => {
  const init = () => {
    window.intlTelInput(document.querySelector('#jphone'));
  };
  return {
    init,
  };
})();

const marriage = (() => {
  const init = () => {
    window.intlTelInput(document.querySelector('#mphone'));
  };
  return {
    init,
  };
})();

window.addEventListener('DOMContentLoaded', (event) => {
  home.init();
  contact.init();
  jyotish.init();
  marriage.init();
});
