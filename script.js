const ratedForceInput = document.getElementById('ratedForce');
const ratedFrequencyInput = document.getElementById('ratedFrequency');

const output20 = document.getElementById('output20');
const output40 = document.getElementById('output40');
const output60 = document.getElementById('output60');

const calculateButton = document.getElementById('calculateButton');

const standardFrequencies = [
  { rpm: 1200, element: output20 },
  { rpm: 2400, element: output40 },
  { rpm: 3600, element: output60 }
];

function calculateEffectiveForce() {
  const ratedForce = parseFloat(ratedForceInput.value);
  const ratedRpm = parseFloat(ratedFrequencyInput.value);

  if (!isNaN(ratedForce) && !isNaN(ratedRpm) && ratedRpm > 0) {
    standardFrequencies.forEach(freq => {
      const effectiveForce = ratedForce * Math.pow(freq.rpm / ratedRpm, 2);
      freq.element.textContent = effectiveForce.toFixed(2);
    });
  } else {
    standardFrequencies.forEach(freq => {
      freq.element.textContent = '--';
    });
  }
}

calculateButton.addEventListener('click', calculateEffectiveForce);
