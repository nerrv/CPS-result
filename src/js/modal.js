export const openModalHandler = (btns, modal, overlay, menu) => {
	btns.forEach(e => {
		e.addEventListener('click', () => {
			overlay.classList.add('overlay--shown')
			modal.classList.add('open')
			menu.classList.remove('open')
		})
	})
}

export const closeModalsHandler = (btns, modals, overlay) => {
	btns.forEach(e => {
		e.addEventListener('click', () => {
			overlay.classList.remove('overlay--shown')
			modals.forEach(e => {
				e.classList.remove('open')
			})
		})
	})
}