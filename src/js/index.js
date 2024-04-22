'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { initTabs } from "./modules/tabs.js";
import { menuBurgerInit } from "./modules/menu-burger.js";

// init-tabs
initTabs();

// burger-menu
menuBurgerInit();

const swiper = new Swiper('.swiper', {
	loop: true,
	effect: 'fade',
	autoplay: {
		delay: 2500,
	},

	pagination: {
		el: '.swiper-pagination',
	},
});