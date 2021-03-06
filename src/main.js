import { AgeCalculator } from './age-calculator.js';
import { createPlanetCards, createStars } from './user-interface-logic.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  createStars();
  $('#user').submit(function(event){
    event.preventDefault();
    $('#user').hide();
    const birthday = $('input[type="date"]').val();
    const gender = $('#gender option:selected').val();
    const activityLevel = $('#activity-level option:selected').val();
    const lifestyle = $('#lifestyle option:selected').val();
    const ageInYears = ((new Date())-(new Date(birthday)))/365/24/60/60/1000;
    const user = new AgeCalculator(ageInYears, gender, activityLevel, lifestyle);
    createPlanetCards(user.calculateStats());
    $('#stars').empty();
    createStars();
  });
});
