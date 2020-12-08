const header = document.querySelector('.page-header');
const menuBtn = header.querySelector('.page-header__button');
const headerWrapper = header.querySelector('.page-header__wrapper');
const navList = header.querySelector('.nav__list');
const promo = document.querySelector('.promo');
const formTitle = document.querySelector('.form-page__title');
const galleryTitle = document.querySelector('.page-gallery__heading');

menuBtn.classList.remove('page-header__button--no-js');
navList.classList.add('nav__list--menu-closed');
headerWrapper.classList.add('page-header__wrapper--menu-closed');
if (promo) {promo.classList.add('promo--menu-closed')};
if (formTitle) {formTitle.classList.add('form-page__title--menu-closed')};
if (galleryTitle) {galleryTitle.classList.add('page-gallery__heading--menu-closed')};

const buttonClickHandler = () => {
  headerWrapper.classList.toggle('page-header__wrapper--menu-closed');
  navList.classList.toggle('nav__list--menu-closed');
  menuBtn.classList.toggle('header__button--menu-closed');
  if (promo) {promo.classList.toggle('promo--menu-closed')};
  if (formTitle) {formTitle.classList.toggle('form-page__title--menu-closed')};
  if (galleryTitle) {galleryTitle.classList.toggle('page-gallery__heading--menu-closed')};
}

menuBtn.addEventListener('click', buttonClickHandler);
