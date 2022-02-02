$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    const numCharacter = $("#tweet-text").val().length;
    const numRemaining = 140 - numCharacter;
    $("#counter").text(numRemaining);
    if (numRemaining < 0) {
      $("#counter").addClass("red");
    }
    if (numRemaining >= 0) {
      $("#counter").removeClass("red");
    }
  });
});
