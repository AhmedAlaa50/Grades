const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const list = document.querySelector("#list");
const getSlider = () => {
  counter.innerHTML = slider.value;
};
slider.oninput = getSlider;
generate.onclick = () => {
  for (let i = 0; i < slider.value; i++) {
    list.innerHTML += `<li>${i}</li>`;
  }
};
