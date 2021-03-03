function loadWebmentions(url){
  url = "https://webmention.io/api/mentions.jf2?target=https://reinhart1010.github.io" + url;
  //var url = "https://webmention.io/api/mentions.jf2?target=https://indieweb.org";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      parseWebmentions(xhr.responseText)
    }
  }
  xhr.open('GET', url, true);
  xhr.send(null);
}

function parseWebmentions(raw){
  var data = {};
  var likes = [], mentions = [], reposts = [], comments = [];
  var likesElement = document.getElementById("webmentions-likes");
  var mentionsElement = document.getElementById("webmentions-mentions");
  var repostsElement = document.getElementById("webmentions-reposts");
  var commentsElement = document.getElementById("webmentions-comments");
  try {
    data = JSON.parse(raw);
    if (!data.type || !data.name || data.type != "feed") throw("Not a valid Webmentions.io response");
  } catch (e){
    console.error(e);
    return;
  }
  var i;
  for (i = 0; i < data.children.length; i++){
    switch (data.children[i]["wm-property"]){
      case "like-of":
        likes.push(data.children[i]);
        break;
      case "repost-of":
        reposts.push(data.children[i]);
        break;
      case "mention-of":
        mentions.push(data.children[i]);
        break;
      case "in-reply-to":
        comments.push(data.children[i]);
        break;
    }
  }
  // Likes
  if (likes.length > 0) likesElement.innerHTML = "";
  likes.forEach((like) => {
    likesElement.innerHTML += "<div><a href='" + like.url + "' target='_blank'><img class='w-50 h-50 m-5 rounded-circle' src='" + like.author.photo + "' alt='" + like.author.name + "'></a></div>"
  });
  Array.prototype.forEach.call(document.getElementsByClassName("request-likes"), (el) => {
    el.innerHTML = likes.length;
  });
  // Mentions
  if (mentions.length > 0) mentionsElement.innerHTML = "";
  mentions.forEach((like) => {
    mentionsElement.innerHTML += "<li><b><a href='" + like.url + " target='_blank'>" + ((!like.name || like.name == "") ? "(A blog post)" : like.name) + "</a></b> by <a href='" + like.author.url + " target='_blank'>" + ((!like.author.name || like.author.name == "") ? ((!like.author.url || like.author.url == "") ? like.url : like.author.url) : like.author.name) + "</a></li>"
  });
  Array.prototype.forEach.call(document.getElementsByClassName("request-mentions"), (el) => {
    el.innerHTML = mentions.length;
  });
  // Reposts
  if (reposts.length > 0) repostsElement.innerHTML = "";
  reposts.forEach((like) => {
    repostsElement.innerHTML += "<div><a href='" + like.url + "' target='_blank'><img class='w-50 h-50 m-5 rounded-circle' src='" + like.author.photo + "' alt='" + like.author.name + "'></a></div>"
  });
  Array.prototype.forEach.call(document.getElementsByClassName("request-reposts"), (el) => {
    el.innerHTML = reposts.length;
  });
  // Comments
  if (comments.length > 0) commentsElement.innerHTML = "";
  comments.forEach((like) => {
    commentsElement.innerHTML += "<li><b><a href='" + like.author.url + " target='_blank'>" + like.author.name + "</a></b> " + like.content.text.split(" ").splice(0, 20).join(" ") + ((like.url) ? (" <a href='" + like.url + "'>(more" + ((like.name) ? (" on \"" + like.name + "\"") : "...") + ")</a>") : "") + "</li>"
  });
  Array.prototype.forEach.call(document.getElementsByClassName("request-comments"), (el) => {
    el.innerHTML = comments.length;
  });
}