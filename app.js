const txt1 = document.getElementById('color1');
const txt2 = document.getElementById('color2');
const txt3 = document.getElementById('color3');
const color1 = document.getElementById('container-color1');
const color2 = document.getElementById('container-color2');
const color3 = document.getElementById('container-color3');

const button = document.getElementById('button');


function createRandomNum (){
  let digits = ('0123456789ABCDEF');
  let color = ('#');

    for (let i = 0; i < 6; i++){
      let randomDigits = Math.floor(Math.random()*16);
      color += digits[randomDigits]

    }

    return color;
}

button.addEventListener('click', function (){
  let colorRandom1 = createRandomNum();
  let colorRandom2 = createRandomNum();
  let colorRandom3 = createRandomNum();
  txt1.textContent = colorRandom1;
  txt2.textContent = colorRandom2;
  txt3.textContent = colorRandom3;

  color1.style.backgroundColor = colorRandom1;
  color2.style.backgroundColor = colorRandom2;
  color3.style.backgroundColor= colorRandom3;

})











