// RSS (Reinhart Syndication Service) connector
function imFeelingLucky(id){
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
  var url = "http://192.168.0.110:3000/getfeed";
  xmlhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) updateFeed(JSON.parse(this.response), id);
  };
  xmlhttp.open("POST", url);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({lucky: true}), );


}

function updateFeed(data, id){
  console.log(data);
  let html = "", i, j;
  for (i = 0; i < data.length; i++){
    let isimage = false;
    html += '<div class="card">';
    // html += '<div class="card-header">' + data[i].channel.id + '</div>';
    if (data[i].image && data[i].image.url != null){
      isimage = true;
      html += '<img src="'+ data[i].image.url + '" alt="' + data[i].image.alt + '">';
    }
    if (data[i].type == "applet"){
      if (data[i].content) html += data[i].content;
    } else {
      html += '<div class="card-body">';
      switch (data[i].type){
        case "post":
          if (data[i].title){
            html += '<h5 class="card-title';
            if (isimage == true) html += ' h6 font-weight-bold';
            else html += ' h4';
            html += '">' + data[i].title + "</h5>";
          };
          if (data[i].author){
            html += '<h6 class="card-subtitle text-muted">By ' + data[i].author + " in " + data[i].channel.name + "</h6>";
          } else html += '<h6 class="card-subtitle text-muted">From the folks at ' + data[i].channel.name + "</h6>";
          if (data[i].description) html += '<p class="card-text">' + data[i].description + "</p>";
          if (data[i].date) html += '<small class="text-muted">' + moment(data[i].date).fromNow() + "</small>";
          break;
      };
      if (data[i].actions && data[i].actions.content && data[i].actions.content.length > 0){
        html += '<div class="text-right">'
        for (j = 0; j < data[i].actions.content.length; j++){
          html += '<a target="_blank" href="' + data[i].actions.content[j].link + '" class="btn btn-sm ';
          if (data[i].actions.content[j].primary && data[i].actions.content[j].primary == true) html += 'btn-success'
          html += '"><b>' + data[i].actions.content[j].label + '</b></a>';
        };
        html += '</div>';
      }
      html += '</div>';
    };
    if (data[i].actions && data[i].actions.footer){
      html += '<div class="card-footer"><a target="_blank" href="' + data[i].actions.footer.link + '" class="btn btn-block btn-sm">' + data[i].actions.footer.label + "</a></div>";
    }
    html += '</div>';
  };
  document.getElementById(id).innerHTML = html;
}
