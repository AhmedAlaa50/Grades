const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const getSlider = () => {
  counter.innerHTML = slider.value;
};
slider.oninput = getSlider;
