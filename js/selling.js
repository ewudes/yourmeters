const openButtonSellSub = document.querySelector(".submit_selling_btn");
const openButtonSellCls = document.querySelector(".selling-btn-cls");

openButtonSellSub.addEventListener("click", function(event) {
    event.preventDefault();
    var mainMenu = document.getElementsByClassName('popup-sell-wrap_none')[0].cloneNode(true);
    mainMenu.classList.add('popup-sell-wrap');
    const overlay = openOverlay(mainMenu.outerHTML);
    document.body.appendChild(overlay);
  });

openButtonSellCls.addEventListener("click", function(event) {
    event.preventDefault();
    var mainMenu = document.getElementsByClassName('popup-sell-wrap_none')[0].cloneNode(true);
    mainMenu.classList.remove('popup-sell-wrap');
    const overlay = openOverlay(mainMenu.outerHTML);
    document.body.appendChild(overlay);
});