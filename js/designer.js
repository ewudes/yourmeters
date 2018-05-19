const openButtonDes = document.querySelector(".title__btn-link");

function openOverlay(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const containerElement = document.createElement("div");
  containerElement.classList.add("container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.innerHTML = content;
  
  const closeMenu = function() {
    document.body.removeChild(overlayElement);
  };

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  closeElement.addEventListener("click", closeMenu);
  
  const menuItems = contentElement.querySelectorAll('li');
  
  for(let item of menuItems) {
    item.addEventListener("click", closeMenu);
  }

  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  return overlayElement;
}

openButtonDes.addEventListener("click", function(event) {
  event.preventDefault(); //nav--large-width
  var mainMenu = document.getElementsByClassName('designer__wrap')[0].cloneNode(true);
  mainMenu.classList.remove('designer--large-width');
  mainMenu.classList.add('designer--small-width');
  const overlay = openOverlay(mainMenu.outerHTML);
  document.body.appendChild(overlay);
});