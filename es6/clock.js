'use strict';

import PokerClock from "./poker-timer-lib.js";
import $ from 'jquery';
import structures from '../json/structures.json';
import Handlebars from 'handlebars';


var heynow = require( '../templates/heynow.hbs');

console.log(heynow);

$(document).ready(() => {

    var pc = new PokerClock();

	var context = {name:'Danny'};

    pc.show();

    pc.setStructure(structures["home game"]);

    pc.show();

    var html = heynow(context);

    $('#main').html(html);


});
