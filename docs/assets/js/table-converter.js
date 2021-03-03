// Converts all HTML tables to responsive tables
var els = document.getElementsByTagName("table");

Array.prototype.forEach.call(els, function(el) {
  // Add Halfmoon's "table" and "table-inner-bordered" classes
  var arr = el.className.split(" ");
  if (arr.indexOf("table") == -1) {
    el.className += " table table-bordered table-striped table-hover";
  }

  // Add a new parent node containing class "table-responsive"
  var parent = el.parentNode;
  var wrapper = document.createElement('div');
  wrapper.className = "table-responsive"

  parent.replaceChild(wrapper, el);
  wrapper.appendChild(el);
});