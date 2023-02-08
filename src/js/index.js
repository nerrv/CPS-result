import '../scss/style.scss'
import './swiper';

import { menuHandler } from './menu'
import { showMoreTextHandler } from './show-more'
import { showMoreSlidesHandler } from './show-more'
import { closeOnOverlay } from './overlay'
import { closeModalsHandler } from './modal'
import { openModalHandler } from './modal';

const menuOpenBtn = document.querySelector('.header__burger')
const menuCloseBtn = document.querySelector('.burger-menu__burger')
const overlay = document.querySelector('.overlay')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuBtns = [menuOpenBtn, menuCloseBtn]

const modalFeedback = document.querySelector('#modal-feedback')
const modalCall = document.querySelector('#modal-call')
const closeModalBtns = document.querySelectorAll('.modal__btn')
const feedbackBtns = document.querySelectorAll('.btn__chat')
const callBtns = document.querySelectorAll('.btn__call')

const modals = [modalCall, modalFeedback, burgerMenu]

const showTextBtn = document.querySelector('.main__show-more')
const moreInfo = document.querySelector('.more-info')

const showBrandsBtn = document.querySelector('.brands__show-more')
const showServicesBtn = document.querySelector('.services__show-more')
const brandSlides = document.querySelectorAll('.brands__slide')
const serviceSlides = document.querySelectorAll('.services__slide')


menuHandler(burgerMenuBtns, burgerMenu, overlay)

openModalHandler(callBtns, modalCall, overlay, burgerMenu)
openModalHandler(feedbackBtns, modalFeedback, overlay, burgerMenu)
closeModalsHandler(closeModalBtns, modals, overlay)

closeOnOverlay(overlay, modals)

showMoreTextHandler(showTextBtn, moreInfo)
showMoreSlidesHandler(showBrandsBtn, brandSlides)
showMoreSlidesHandler(showServicesBtn, serviceSlides)

console.log('Works!')