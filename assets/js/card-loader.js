var adaptiveCard = new AdaptiveCards.AdaptiveCard();
adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
  spacing: {
    padding: "3rem"
  },
  actions: {
    buttonSpacing: 4,
    actionAlignment: 'right'
  },
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
});
AdaptiveCards.processMarkdown = function(text) { return markdownit().render(text); }
function loadCards(data){
  data.forEach(function (card){
    if (card.$schema && card.$schema == "http://adaptivecards.io/schemas/adaptive-card.json"){
      adaptiveCard.parse(card);
      var renderedCard = adaptiveCard.render();
      document.getElementById('card-container').appendChild(renderedCard);
    } else switch (card.type){
      case "Reinhart.advertisement":
      case "Reinhart.article":
        var draft = '<div class="card my-10 mx-0 p-0"';
        if (card.color) draft += ' style="' + ((card.color.background) ? ('background-color:' + card.color.background + ';') : '') + ((card.color.foreground) ? ('color:' + card.color.foreground + ';') : '') + '"';
        draft += '>';
        if (card.author) switch (card.author.name){
          case 'Reinhart':
            draft += '<p class="px-20 py-10 m-0" style="background-color:' + ((card.color && card.color.background) ? ((card.color.backgroundTop) ? card.color.backgroundTop : card.color.background) : 'inherit') + ';color:' + ((card.color && card.color.foreground) ? ((card.color.foregroundTop) ? card.color.foregroundTop : card.color.foreground) : 'inherit') + '">Official Post from <b>Reinhart</b></p>';
            break;
          default:
            draft += '<p class="px-20 py-10 m-0" style="background-color:' + ((card.color && card.color.background) ? ((card.color.backgroundTop) ? card.color.backgroundTop : card.color.background) : 'inherit') + ';color:' + ((card.color && card.color.foreground) ? ((card.color.foregroundTop) ? card.color.foregroundTop : card.color.foreground) : 'inherit') + '">Shared from <b><a style="color:inherit; text-decoration:underline;" href="' + card.author.url + '" target="_blank">' + card.author.name + '</a></b></p>';
        }
        if (card.image) draft += '<img src="' + card.image + '" alt="' + card.body.title + '" class="img-fluid">';
        draft += '<div class="content m-20 mt-10">';
        if (card.body.kicker) draft += '<h5 class="card-title">' + card.body.kicker + '</h5>';
        if (card.body.title && !(card.body.options && card.body.options.hideTitle)) draft += (card.type == "Reinhart.advertisement" ? '<h3>' : '<h4 class="mb-5">') + card.body.title + (card.type == "Reinhart.advertisement" ? '</h3>' : '</h4>');
        if (card.body.subtitle) draft += '<h5 class="card-title">' + card.body.subtitle + '</h5>';
        if (card.body.description) draft += '<p class="font-size-18">' + card.body.description + '</p>';
        if (card.events){
          var i;
          for (i = 0; i < card.events.length; i++){
            draft += '<div class="p-10 rounded mb-10" style="background-color:rgba(0,0,0,0.5);color:#ffffff">';
            var n = Object.keys(card.events[i]).length;
            if (card.events[i].title){
              draft += '<h5 class="m-0">' + card.events[i].title + '</h5>';
              n--;
              if (n > 0) draft += '<hr>';
            }
            if (card.events[i].location){
              draft += '<p class="m-0"><svg class="bi" width="18" height="18" fill="white"><use xlink:href="/img/bootstrap-icons.svg#geo-fill"/></svg> <b>' + card.events[i].location + '</b></p>';
              n--;
              if (n > 0) draft += '<hr>';
            }
            if (card.events[i].start){
              draft += '<p class="m-0"><b>Starts at</b> ' + new Date(card.events[i].start).toString() + '</p>';
              n--;
              if (n > 0) draft += '<hr>';
            }
            if (card.events[i].end) draft += '<p class="m-0"><b>Ends at</b> ' + new Date(card.events[i].end).toString() + '</p>';
            draft += '</div>';
          }
        }
        if (card.actions){
          draft += '<div class="text-right" style="line-height: 5rem">';
          var i;
          for (i = 0; i < card.actions.length; i++){
            draft += ' <a href="' + card.actions[i].url + (card.type == "Reinhart.advertisement" || card.actions[i].openInExternal ? ' target="_blank"' : '') + '" class="btn btn-lg shadow-lg bg-light text-dark"><b>' + card.actions[i].title + '</b></a>';
          }
          draft += '</div>';
        }
        draft += '</div>';
        draft += '</div>';
        document.getElementById('card-container').innerHTML += draft;
        break;
      case "Custom.iframe":
        var draft = '<div class="card my-10 mx-0 p-0"><iframe src="' + (card.src || card.url) + '" class="rounded-top" style="width: 100%; height: 50vh; border: none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>This card requires &lt;iframe&gt; rendering, which is not supported by your browser.</iframe>'
        if (card.body){
          draft += '<div class="content m-20 mt-10">';
          if (card.body.title && card.body.title != ""){
            draft += '<h3>' + card.body.title + '</h3>';
          }
          if (card.body.subtitle && card.body.subtitle != ""){
            draft += '<p>' + card.body.subtitle + '</p>';
          }
          if (card.url && card.url != ""){
            draft += '<div class="text-right"><a href="' + card.url + '" target="_blank" class="btn btn-lg shadow-lg btn-primary"><b>Open in separate tab</b></a></div>';
          }
          draft += '</div>';
        }
        draft += '</div>';
        document.getElementById('card-container').innerHTML += draft;
        break;
      case "Custom.rawHTML":
        if (card.body){
          document.getElementById('card-container').innerHTML += card.body;
        }
        break;
      default:
        console.err("Unable to render card of type:" + card.type);
    }
  });
}
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}