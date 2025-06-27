const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    res.innerHTML = `Please give a valid height ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    res.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    res.innerHTML = `<span>${bmi}</span>`;
  }
});
