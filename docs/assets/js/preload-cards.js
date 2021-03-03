function preloadCards(list){
  if (list == true){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        preloadCards(xhr.responseText);
      }
    }
    xhr.open('GET', '/data/cards.json', true);
    xhr.send(null);
    return;
  }

  let data = null;
  let list2 = document.getElementById("raw_json").innerHTML;

  document.getElementById("raw_json").innerHTML = ""

  try {
    if (list){
      data = JSON.parse(list);
      data = data.concat(JSON.parse(list2.replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
    }
    else data = JSON.parse(list2.replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
  } catch (e) {
    return;
  }
  if (!Array.isArray(data)) return;
  loadCards(data);
}

preloadCards();