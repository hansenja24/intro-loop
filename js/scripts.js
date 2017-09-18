$ (document).ready(function(){

  var tags =["h1", "p", "img"];
  var text = ["a header", "a paragraph", "an image"];

  tags.forEach(function(tag) {
    $(tag).click(function() {
      alert("This is "+text[tags.indexOf(tag)]+".");
    });
  });

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});
