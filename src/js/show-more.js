export const showMoreTextHandler = (btn, text) => {
	btn.addEventListener('click', () => {
		text.classList.toggle('visually-hidden')
		btn.classList.toggle('show-more--active')
		if (text.classList.contains('visually-hidden')) {
			btn.textContent = 'Читать далее'
		} else {
			btn.textContent = 'Скрыть'
		}
	})
}

export const showMoreSlidesHandler = (btn, slides) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('show-more--active')
		slides.forEach(e => {
			e.classList.toggle('swiper-slide--open')
			if (e.classList.contains('swiper-slide--open')) {
				btn.textContent = 'Скрыть'
			} else {
				btn.textContent = 'Показать все'
			}
		})
	})
}