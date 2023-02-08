export const closeOnOverlay = (overlay, modals) => {
	overlay.addEventListener('click', () => {
		overlay.classList.toggle('overlay--shown')
		modals.forEach(e => {
			e.classList.remove('open')
		})
	})
}