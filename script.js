$(function () {
  var roles = ["Student", "VITian", "Pianist", "Coder"];
  var count = 0;
  var $typeSpan = $("#intro .content1 h2 span").typist({
    text: roles[count]
  });
  setInterval(() => {
    $typeSpan
      .typistRemove(roles[count++ % roles.length].length)
      .typistPause(2000)
      .typistAdd(roles[count % roles.length]);
  }, 5000);
  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});
