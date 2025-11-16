const weighingArea = document.getElementById('weighingArea');
const resultDisplay = document.getElementById('result');

weighingArea.addEventListener('touchstart', calculateWeight);
weighingArea.addEventListener('touchmove', calculateWeight);
weighingArea.addEventListener('touchend', resetWeight);

function calculateWeight(event) {
    // Simulazione misurazione peso
    const pressure = event.touches ? event.touches[0].force : 0;
    const estimatedWeight = pressure * 1000;

    resultDisplay.textContent = `Peso: ${estimatedWeight.toFixed(2)} grammi`;
}

function resetWeight() {
    resultDisplay.textContent = 'Peso: 0 grammi';
}
