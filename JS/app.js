const SWIPER = new Swiper('.swiper', {
  direction: 'horizontal',
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true
  }
})