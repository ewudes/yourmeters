$(document).ready(function() {

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});

	$(".carousel").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	$(".carousel-rew").owlCarousel({
		loop : true,
		responsive : {
			0 : {
				items : 3,
				nav : true
			}
		},
		navText : ""
	});

	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});

	$(".tabs_header .wrapper .tab").click(function(){
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

// $(window).load(function() {
// 	$(".top_header").animated("fadeInDown", "fadeOut");
// 	$(".top_phone").animated("fadeInRight", "fadeOut");
// 	$(".tx-about").animated("fadeInRight", "fadeOut");
// 	$(".profi_item").animated("fadeInRight", "fadeOut");
// 	$("footer").animated("fadeIn", "fadeOut");

// });


var abv = "apartment"; 
 function vkladki(x,y) {
 var mostrar = document.getElementById(x);
 var actual = document.getElementById(abv);
 if(mostrar==actual) {return false;} 
 actual.className="skryt";
 mostrar.className="vid";
 abv = x;
 document.getElementById('vkladka1').style.background ='#ECEDEF';
 if (self.ramka) ramka.style.background = '#ECEDEF';
 y.style.background = '#B7BBC2'; ramka = y; 
}



const openButton = document.querySelector(".hamburger-menu-link");

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

openButton.addEventListener("click", function(event) {
  event.preventDefault(); //nav--large-width
  var mainMenu = document.getElementsByClassName('nav')[0].cloneNode(true);
  mainMenu.classList.remove('nav--large-width');
  mainMenu.classList.add('nav--small-width');
  const overlay = openOverlay(mainMenu.outerHTML);
  document.body.appendChild(overlay);
});


const phone = document.querySelector(".phone");
phone.addEventListener('keydown', function(event){
  let isDigit = false;
  let isDash = false;
  let isControl = false;
  
  if (event.key >= 0 || event.key <= 9){
    isDigit = true;
  }
  
  if (event.key == '-'){
    isDash = true;
  }
  
  if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace'){
    isControl = true;
  }
  
  if (!isDigit && !isDash && !isControl){ //(isDigit == false)
    event.preventDefault();
  }
})