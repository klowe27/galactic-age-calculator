import $ from 'jquery';

export function createPlanetCards(array) {
  array.forEach(function(element){
    $('#output').append(`<span class="planet"><h2>${element[0]}</h2><p><strong>Age:</strong> ${element[1].toFixed(2)}</p><p><strong>Life Expectancy:</strong> ${element[2].toFixed(2)}</p><p><strong>Years to Live:</strong> ${element[3]}</p></span>`);
  });
}

export function createStars() {
  const height = $(window).height();
  const width = $(window).width();
  let stars = "";
  for (let i = 0; i < 350; i++) {
    stars += `<span class="star" style="left: ${randomNumber(width)}px; bottom: ${randomNumber(height)}px; background-color: rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)});"></span>`;
  }
  $('body').append(stars);
  setInterval(function(){
    $('.star:odd').fadeIn(4000).fadeOut(2000);
    $('.star:even').fadeOut(6000).fadeIn(3000);
  }, 1000);
}

function randomNumber(max) {
  return Math.floor(Math.random()*max+1);
}
