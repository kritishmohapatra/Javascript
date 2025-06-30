// generated random col
const randomCol = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10)];
  }

  return color;
};
let intvid;
const startchangingcol = function () {
  if (!intvid) {
    intvid = setInterval(bgcolor, 1000);
  }
  function bgcolor() {
    document.body.style.backgroundColor = randomCol();
  }
};
const stopchangingcol = function () {
  clearInterval(intvid);
  intvid = null;
};

document.querySelector('#start').addEventListener('click', startchangingcol);
document.querySelector('#stop').addEventListener('click', stopchangingcol);
