var appendTextToElement = function(parent_ele, text) {
  var ele = document.createElement('DIV');
  ele.innerHTML = text;
  parent_ele.appendChild(ele);
};
