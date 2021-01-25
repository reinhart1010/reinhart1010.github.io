// Copyright 2018 Reinhart Previano K.
// Requires JQuery
var req = new XMLHttpRequest();
req.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200){
    var jsonCom = JSON.parse(this.responseText);
    insertContent(jsonCom);
  }
};
req.open("GET", "data/en-US/communities.json", true);
req.overrideMimeType("application/json");
req.send(null);

function insertContent(json){
  var prsList = json.communities.personal;
  var mozList = json.communities.mozilla;
  var othList = json.communities.other;
  var incList = json.communities.inactive;
  var prsDiv = "", mozDiv = "", othDiv ="", incDiv = "";
  var h, i, j, k;
  for(h = 0; h < prsList.length; h++){
    prsDiv += "<div class='card' style='color:" + prsList[h].color + "; background-color:" + prsList[h].bgcolor + "'><h2>" + prsList[h].name + "</h2><p class='acontainer'><a href='" + prsList[h].link1 + "'>" + prsList[h].btn1 + "</a> | <a href='" + prsList[h].link2 + "'>" + prsList[h].btn2 + "</a><br><a href='" + prsList[h].link3 + "'>" + prsList[h].btn3 + "</a></p><b class='summary'>" + prsList[h].summary + "</b><p class='description'>" + prsList[h].description + "</p></div>";
  };
  document.getElementById("list-communities-personal").innerHTML = prsDiv;
  for(i = 0; i < mozList.length; i++){
    mozDiv += "<div class='card' style='color:" + mozList[i].color + "; background-color:" + mozList[i].bgcolor + "'><h2>" + mozList[i].name + "</h2><p class='acontainer'><a href='" + mozList[i].link1 + "'>" + mozList[i].btn1 + "</a> | <a href='" + mozList[i].link2 + "'>" + mozList[i].btn2 + "</a><br><a href='" + mozList[i].link3 + "'>" + mozList[i].btn3 + "</a></p><b class='summary'>" + mozList[i].summary + "</b><p class='description'>" + mozList[i].description + "</p></div>";
  };
  document.getElementById("list-communities-mozilla").innerHTML = mozDiv;
  for(j = 0; j < othList.length; j++){
    othDiv += "<div class='card' style='color:" + othList[j].color + "; background-color:" + othList[j].bgcolor + "'><h2>" + othList[j].name + "</h2><p class='acontainer'><a href='" + othList[j].link1 + "'>" + othList[j].btn1 + "</a> | <a href='" + othList[j].link2 + "'>" + othList[j].btn2 + "</a><br><a href='" + othList[j].link3 + "'>" + othList[j].btn3 + "</a></p><b class='summary'>" + othList[j].summary + "</b><p class='description'>" + othList[j].description + "</p></div>";
  };
  document.getElementById("list-communities-other").innerHTML = othDiv;
  for(k = 0; k < incList.length; k++){
    incDiv += "<div class='card' style='color:" + incList[k].color + "; background-color:" + incList[k].bgcolor + "'><h2>" + incList[k].name + "</h2><p class='acontainer'><a href='" + incList[k].link1 + "'>" + incList[k].btn1 + "</a> | <a href='" + incList[k].link2 + "'>" + incList[k].btn2 + "</a><br><a href='" + incList[k].link3 + "'>" + incList[k].btn3 + "</a></p><b class='summary'>" + incList[k].summary + "</b><p class='description'>" + incList[k].description + "</p></div>";
  };
  document.getElementById("list-communities-inactive").innerHTML = incDiv;
};

function togglePage(id1,id2) {
    var div1 = document.getElementById(id1);
    var div2 = document.getElementById(id2);
    div1.style.display = div1.style.display == "none" ? "block" : "none";
    div2.style.display = div2.style.display == "block" ? "none" : "block";
}
