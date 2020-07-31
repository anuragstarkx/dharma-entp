AOS.init({
	duration: "800",
	disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});