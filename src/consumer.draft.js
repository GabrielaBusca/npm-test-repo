const marker = require('@ajar/marker');
const slugger = require('./index.js');

marker.blue('Start program!');

marker.red(slugger("i", "am", "a", "slugged", "string"));
