const slider = document.querySelector("#slider");
const counter = document.querySelector("#number-of-students");
const generate = document.querySelector("#generate");
const studentsRef = document.querySelector("#students");
const totalAverageRef = document.querySelector("#total-average");

let id, name_, gender, math, physics, chemistry, history_, english, average;
const getSlider = () => {
  counter.innerHTML = slider.value;
};
const students = (slider.oninput = getSlider);

generate.onclick = () => {
  let records = [];
  let sum = 0;
  let totalAverage = 0;
  studentsRef.innerHTML = ``;
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
    studentsRef.innerHTML += `<tr>
  <td class="id">${id}</td>
  <td class="name">${name_}</td>
  <td class="gender">${gender}</td>
  <td class="math">${math}</td>
  <td class="physics">${physics}</td>
  <td class="chemistry">${chemistry}</td>
  <td class="history">${history_}</td>
  <td class="english">${english}</td>
  <td class="average">${average}</td>
</tr>`;
  }
  totalAverage = sum / records.length;
  console.log(records.length);
  totalAverageRef.innerHTML = `Total Average = ${totalAverage}`;
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
