const openButtonDes = document.querySelector(".title__btn-link");

function Selected(a) {
	var label = a.value;
	if (label==1) {
		document.getElementById("apartment").style.display='block';
		document.getElementById("home").style.display='none';
		document.getElementById("land").style.display='none';
		document.getElementById("commerce").style.display='none';
		
	} else if (label==2) {
		document.getElementById("apartment").style.display='none';
		document.getElementById("home").style.display='block';
		document.getElementById("land").style.display='none';
		document.getElementById("commerce").style.display='none';

	} else if (label==3) {
		document.getElementById("apartment").style.display='none';
		document.getElementById("home").style.display='none';
		document.getElementById("land").style.display='block';
		document.getElementById("commerce").style.display='none';
	
	} else if (label==4) {
		document.getElementById("apartment").style.display='none';
		document.getElementById("home").style.display='none';
		document.getElementById("land").style.display='none';
		document.getElementById("commerce").style.display='block';
		
	} else {
		document.getElementById("apartment").style.display='none';
		document.getElementById("home").style.display='none';
		document.getElementById("land").style.display='none';
		document.getElementById("commerce").style.display='none';
	}
	
}

function openOverlayDes(content) {
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
