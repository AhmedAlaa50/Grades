const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const list = document.querySelector("#list");

const id,
      name_,
      gender,
      math,
      physics,
      chemistry,
      history_,
      english,
      average;
const records = [];
const getSlider = () => {
  counter.innerHTML = slider.value;
};
const students = (slider.oninput = getSlider);

generate.onclick = () => {
  for (let i = 0; i < slider.value; i++) {
    if (Math.floor(Math.random() * 2) == 0) {
      gender = "male";
      name_ = `${names.male[Math.floor(Math.random() * 100)]} ${
        names.surnames[Math.floor(Math.random() * 300)]
      }`;
    } else {
      gender = "female";
      name_ = `${names.female[Math.floor(Math.random() * 100)]} ${
        names.surnames[Math.floor(Math.random() * 300)]
      }`;
    }
    records.push([
      id,
      name_,
      gender,
      math,
      physics,
      chemistry,
      history_,
      english,
      average,
    ]);
  }
};

// const id = document.querySelector(".id");
// const name_ = document.querySelector(".name");
// const gender = document.querySelector(".gender");
// const math = document.querySelector(".math");
// const physics = document.querySelector(".physics");
// const chemistry = document.querySelector(".chemistry");
// const history_ = document.querySelector(".history");
// const english = document.querySelector(".english");
// const average = document.querySelector(".average");
// const table = document.querySelector("tbody");

// ${names.male[Math.floor(Math.random()*100)]} ${names.surnames[Math.floor(Math.random()*300)]}

// list.innerHTML += `<li class="li"> ${
//   names.male[Math.floor(Math.random() * 100)]
// } ${names.surnames[Math.floor(Math.random() * 300)]}</li>`;
