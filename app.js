// https://www.omnicalculator.com/conversion/tsp-ml-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mlRadio = document.getElementById('mlRadio');
const tspRadio = document.getElementById('tspRadio');

let ml;
let tsp = v; 

// labels of the inpust
const variable = document.getElementById('variable');

mlRadio.addEventListener('click', function() {
  variable.textContent = 'tsp';
  tsp = v;
  result.textContent = '';
});

tspRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;

  else if(tspRadio.checked)
    result.textContent = `tsp = ${computetsp().toFixed(5)}`;
})

// calculation

function computeml() {
  return Number(tsp.value) * 4.929;
}

function computetsp() {
  return Number(ml.value) / 4.929;
}