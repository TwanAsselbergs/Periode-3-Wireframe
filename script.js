let slider = document.getElementById("priceSlider");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
