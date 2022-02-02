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
    let output = [];
    for (const element of arr) {
      output.push(createTweetElement(element));
    }
    return output;
  };

  // Test / driver code (temporary). Eventually will get this from the server.

  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  console.log(renderTweets(data));

  const $tweet = renderTweets(data);

  // Test / driver code (temporary)
  $(".tweets-section").prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

{
}
