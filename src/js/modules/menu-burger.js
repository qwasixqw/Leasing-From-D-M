function menuBurgerInit() {
	const burgerIcon = document.querySelector('.header__burger');
	const menuBurger = document.querySelector('.menu-burger');
	
	burgerIcon.addEventListener('click', burgerHandlerClick);

	function burgerHandlerClick() {
		menuBurger.classList.toggle('active-menu-burger');
		window.scrollTo(0, 0);
		document.body.classList.toggle('body-overflow');
	}
}

export { menuBurgerInit };