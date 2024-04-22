function initTabs() {
	const tabs = document.querySelectorAll('.tabs__btn-item');

	tabs.forEach((item) => {
		item.addEventListener('click', handleTabClick);
	})

	function handleTabClick(event) {
		const clickedTab = event.currentTarget;
		const tabId = clickedTab.getAttribute('data-tab');
		switchTab(tabId);
		activeTab(clickedTab);
	}

	function switchTab(tabId) {
		const tabContents = document.querySelectorAll('.tabs__content');
		
		tabContents.forEach((item) => {
			item.classList.remove('tabs-active');
		});

		const selectedTabContent = document.querySelector(`.tabs__content[data-tab="${tabId}"]`);
		selectedTabContent.classList.add('tabs-active');
	}

	function activeTab(clickedTab) {
		const tabItem = document.querySelectorAll('.tabs__btn-item');

		tabItem.forEach((item) => {
			item.classList.remove('color-active');
		});

		clickedTab.classList.add('color-active');
	}
}

export { initTabs };