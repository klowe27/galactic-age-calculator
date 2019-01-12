import $ from 'jquery';

export function createPlanetCards(array) {
  array.forEach(function(element){
    $('#output').append(`<div class="planet"><h2>${element[0]}</h2><p><strong>Age:</strong> ${element[1].toFixed(2)}</p><p><strong>Life Expectancy:</strong> ${element[2].toFixed(2)}</p><p><strong>Years to Live:</strong> ${element[3]}</p></div>`);
  });
}

export function createStars() {
  const height = $(window).height();
  const width = $(window).width();
  for (let i = 0; i < 10; i++) {
    $("#stars").append(`<div class="star" style="left: ${randomNumber(width)}; bottom: ${randomNumber(height)}; background-color: rgb(${randomNumber(255)}, ${randomNumber(255)}"></div>`);
    console.log(randomNumber(height));
  }
}

function randomNumber(max) {
  return Math.floor(Math.random()*max+1)
}
