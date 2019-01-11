import $ from 'jquery';

export function createPlanetCards(array) {
  array.forEach(function(element){
    $('#output').append(`<div class="planet"><h1>${element[0]}</h1><p><strong>Age:</strong> ${element[1].toFixed(2)}</p><p><strong>Life Expectancy:</strong> ${element[2].toFixed(2)}</p><p><strong>Years to Live:</strong> ${element[3]}</p></div>`);
  });
}
