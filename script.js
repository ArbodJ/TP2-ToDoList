const form = document.querySelector("form");
const input = document.getElementById("item");
const liTxt = document.getElementById("list");

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  liTxt.innerHTML += `<li><span class="star">&lowast; </span> ${input.value}</li>`;
  input.value = null;
});

liTxt.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.remove();
});
