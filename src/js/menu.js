export const menuHandler = (btns, menu, overlay) => {
	btns.forEach(e => {
		e.addEventListener('click', () => {
			overlay.classList.toggle('overlay--shown')
			menu.classList.toggle('open')
		})
	})
}