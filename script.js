const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const students = document.querySelector("#students");

let id, name_, gender, math, physics, chemistry, history_, english, average;
const records = [];
let sum = 0;
const totalAverage;
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
    math = Math.floor(Math.random() * 100);
    physics = Math.floor(Math.random() * 100);
    chemistry = Math.floor(Math.random() * 100);
    history_ = Math.floor(Math.random() * 100);
    english = Math.floor(Math.random() * 100);
    average = (math + physics + chemistry + history_ + english) / 5;
    sum += average;
    records.push([
      // id,
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
  totalAverage = sum / records.length;
};
// console.log(records);
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
