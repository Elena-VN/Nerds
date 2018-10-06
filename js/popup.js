var link = document.querySelector(".js-contacts-btn");
var popup = document.querySelector(".contacts__popup");
var overlay = document.querySelector(".popup-overlay");
var close = document.querySelector(".close");
var form = popup.querySelector("form");
var contactsName = popup.querySelector("[name = name-contacts]");
var contactsEmail = popup.querySelector("[name = email-contacts]");
var contactsText = popup.querySelector("[name = text-contacts]");


link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("contacts__popup-show");
  overlay.classList.add("popup-overlay-show");
  contactsName.focus();
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("contacts__popup-show");
  popup.classList.remove("js-error");
  overlay.classList.remove("popup-overlay-show");

});

overlay.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("contacts__popup-show");
  overlay.classList.remove("popup-overlay-show");
});

form.addEventListener("submit", function(evt) {
  if (!contactsName.value || !contactsEmail.value || !contactsText.value) {
    evt.preventDefault();
    popup.classList.add("js-error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("contacts__popup-show")) {
      evt.preventDefault();
      popup.classList.remove("contacts__popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});
