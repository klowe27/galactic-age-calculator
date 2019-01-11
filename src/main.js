import { AgeCalculator } from './age-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let user = new AgeCalculator(55);
  $('#output').append(`<p>${user.ageInYears}</p>`);
});
