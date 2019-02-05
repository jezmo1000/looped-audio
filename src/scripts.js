import {Howl, Howler} from 'howler';
const { Howl, Howler } = require('howler');

var sound = new Howl({
  src: ['loops/nautilus.aiff']
});

sound.play();