$(document).ready(function (e) {
  var b = e(".cd-section"),
    c = e("#cd-nav a");
  d();
  e(window).on("scroll", function () {
    d()
  });
  c.on("click", function (f) {
    f.preventDefault();
    a(e(this.hash))
  });

  function d() {
    b.each(function () {
      $this = e(this);
      var f = e('#cd-nav a[href="#' + $this.attr("id") + '"]').data("number") - 1;
      if (($this.offset().top - e(window).height() / 2 < e(window).scrollTop()) && ($this.offset().top + $this.height() - e(window).height() / 2 > e(window).scrollTop())) {
        c.eq(f).addClass("is-selected")
      } else {
        c.eq(f).removeClass("is-selected")
      }
    })
  }

  function a(f) {
    e("body,html").animate({
      scrollTop: f.offset().top
    }, 600)
  }
});
new WOW().init();