const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const list = document.querySelector("#list");
var imported = document.createElement("script");
imported.src = "names.js";
document.head.appendChild(imported);
const getSlider = () => {
  counter.innerHTML = slider.value;
};
slider.oninput = getSlider;
generate.onclick = () => {
  for (let i = 0; i < slider.value; i++) {
    if (Math.floor(Math.random() * 2) == 0) {
      list.innerHTML += `<li class="li"> ${
        names.male[Math.floor(Math.random() * 100)]
      } ${names.surnames[Math.floor(Math.random() * 300)]}</li>`;
    } else {
      list.innerHTML += `<li class="li"> ${
        names.female[Math.floor(Math.random() * 100)]
      } ${names.surnames[Math.floor(Math.random() * 300)]}</li>`;
    }
  }
};
// ${names.male[Math.floor(Math.random()*100)]} ${names.surnames[Math.floor(Math.random()*300)]}
