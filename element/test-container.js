'use strict';

var type = 'test-container';
window.TestContainer = Polymer({
    is: type,
    properties: {
        prop1: {
            type: String,
            value: 'Not Ready!'
        }
    },
    ready: function () {
        console.info(type + ': ready');
        this.prop1 = 'Ready!';
    },
    attached: function () {
        console.info(type + ': attached');
        this.prop1 = 'Attached!';
    }
});