import template from './movieList.html';
import controller from './movieList.controller.js';

export default {
    bindings: {
        testinput: '@',
        testinput2: '<',
        primitive1: '@',
        primitive2: '=',
        primitive3: '<',
        movies1: '@',
        movies2: '<'
    },
    template,
    controller
}

