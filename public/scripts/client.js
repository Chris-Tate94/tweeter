/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const createTweetElement = function (obj) {
    const user = obj["user"];
    const content = obj["content"];
    const time = timeago.format(obj["created_at"]);

    const newTweet = `
    <article class="tweets-container">
  <header>
    <div class="profile-info">
      <img src="${user.avatars}"/>
      <p class="profile-name">${user.name}</p>
      <p class="profile-handle">${user.handle}</p>
    </div>
    <div class="tweet">
      <p>${content.text}</p>
    </div>
  </header>
  <footer class="tweet-footer">
    <div>
      <p class="date-and-time">${time}</p>
    </div>
    <div>
      <i class="fas fa-flag footer-icons"></i>
      <i class="fas fa-retweet footer-icons"></i>
      <i class="fas fa-heart footer-icons"></i>
    </div>
  </footer>
</article> `;

    return newTweet;
  };

  const renderTweets = function (arr) {
    $(".tweets-section").empty();
    for (const element of arr) {
      const tweetElement = createTweetElement(element);
      $(".tweets-section").prepend(tweetElement);
    }
  };

  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" }).then((data) => {
      console.log("success", data);
      renderTweets(data);
    });
    console.log("success");
  };

  $("form").on("submit", function (event) {
    event.preventDefault();

    const numCharacter = $(".new-tweet-text").val().length;
    if (!numCharacter) {
      return alert("Form cannot be blank");
    }
    if (numCharacter > 140) {
      return alert("Character count exceeded");
    }

    $.post("/tweets", $(this).serialize(), function () {
      console.log("success");
      loadTweets();
    });
  });

  loadTweets();
});
