"use strict";

// header
(function () {
  const header = document.querySelector(".header"),
    logo = header.querySelector(".header__logo"),
    wrapper = header.querySelector(".header__wrapper"),
    burger = header.querySelector(".header__burger");
  logo.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      wrapper.classList.remove("open");
      scrollLock.enablePageScroll();
    } else {
      burger.classList.add("active");
      wrapper.classList.add("open");
      scrollLock.disablePageScroll();
    }
  });

  // fixing header
  window.addEventListener("scroll", () => fixedHeader());
  function fixedHeader() {
    if (window.scrollY > 32) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  fixedHeader();

  // go to section
  const navLinks = document.querySelectorAll(".header__nav a, .footer__nav a");
  navLinks.forEach(link => link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({
      block: "start"
    });
    burger.classList.remove("active");
    wrapper.classList.remove("open");
  }));

  // spy scrolling
  const sections = document.querySelectorAll("[data-section]");
  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(section => {
      const styles = getComputedStyle(section),
        topPos = section.offsetTop - parseInt(styles.scrollMarginTop),
        topPosWithHeight = topPos + section.getBoundingClientRect().height,
        id = section.id,
        activeLink = document.querySelector(`a[href*=${id}]`);
      if (topPos <= scrollPos && topPosWithHeight > scrollPos) {
        activeLink.classList.add("active");
      } else {
        activeLink.classList.remove("active");
      }
    });
  };
})();

// faq
(function () {
  document.querySelectorAll(".faq__item").forEach(item => {
    item.querySelector(".faq__question").addEventListener("click", () => {
      item.classList.toggle("active");
      SlideElement.toggle(item.querySelector(".faq__answer"), {
        duration: 400
      });
    });
  });
})();