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
const rand = () => Math.floor(Math.random() * 100);
generate.onclick = () => {
  let records = [];
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
    records.push({
      id,
      name_,
      gender,
      math: rand(),
      physics: rand(),
      chemistry: rand(),
      history_: rand(),
      english: rand(),
      average: 0,
    });
    records[i].average =
      (records[i].math +
        records[i].physics +
        records[i].chemistry +
        records[i].history_ +
        records[i].english) /
      5;
    studentsRef.innerHTML += `<tr>
  <td class="id">${records[i].id}</td>
  <td class="name">${records[i].name_}</td>
  <td class="gender">${records[i].gender}</td>
  <td class="math">${records[i].math}</td>
  <td class="physics">${records[i].physics}</td>
  <td class="chemistry">${records[i].chemistry}</td>
  <td class="history">${records[i].history_}</td>
  <td class="english">${records[i].english}</td>
  <td class="average">${records[i].average}</td>
</tr>`;
  }
  totalSum = records.reduce((sum, num) => {
    return sum + num.average;
  }, 0);
  console.log(totalSum / records.length);
  totalAverageRef.innerHTML = `Total Average = ${totalSum / records.length}`;
};
