// Haal de slider op met behulp van zijn ID priceSlider
let slider = document.getElementById("priceSlider");

// Haal het output-element op met behulp van zijn ID sliderValue
let output = document.getElementById("sliderValue");

// Stel de waarde van de output in op de huidige waarde van de slider
output.innerHTML = slider.value;

// Wanneer de slider verandert, update dan de waarde van de output
slider.oninput = function () {
  output.innerHTML = this.value;
};