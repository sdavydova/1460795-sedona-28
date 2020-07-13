// INDEX.HTML
const search_button = document.querySelector(".button_search");
const form = document.querySelector(".form");
const search_hotel_location = form.querySelector(".search_hotel_location");
const search_form_input = form.querySelector(".search_form_input");
const form_number = form.querySelector(".form_number");
const fields = form.querySelectorAll(".field");

form.classList.add("form_hidden");

search_button.addEventListener("click", () => {
  form.classList.remove("form_hidden");
});

function checkOnValid() {
  let isValid = true;
  for (var i = 0; i < fields.length; i++) {
    fields[i].style.borderColor = "transparent";
    if (!fields[i].value) {
      isValid = false;
      console.log(fields[i]);
      fields[i].style.border="1px solid red";
    }
  }

  if(isValid) {
    form.classList.add("form_hidden");
  }

  return isValid;
}
