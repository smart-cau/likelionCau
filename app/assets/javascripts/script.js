$(document).ready(function() {
  $("page-scroll").mouseover(function() {
    var p = $("p#44.test").css("background-color", "yellow");
    p.hide(1500).show(1500);
    p.queue(function() {
      p.css("background-color", "red");
    });
  });
});