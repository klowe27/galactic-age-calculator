import { AgeCalculator } from './age-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let user = new AgeCalculator(32);
  $('#output').append(`<p>${user.ageInYears}</p>`);

  // ((new Date())-(new Date(birthday)))/365/24/60/60/1000


});
