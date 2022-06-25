const btnEl = document.getElementById("btn");
const text_id_El = document.querySelector(".text-id");
const adviceEl = document.querySelector(".advice");

const url = "https://api.adviceslip.com/advice";

window.addEventListener("DOMContentLoaded", () => {
  getData();
});

async function getData() {
  const res = await fetch(url);
  const { slip } = await res.json();

  text_id_El.innerHTML = `AdVICE #${slip.id}`;
  adviceEl.innerHTML = `"${slip.advice}"`;
}

btnEl.addEventListener("click", () => {
  getData();
});
