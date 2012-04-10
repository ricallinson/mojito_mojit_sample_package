/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('baz_controller', function(Y, NAME) {

    Y.mojito.controllers[NAME] = {

        foo: function(ac) {
            ac.done({});
        },

        bar: function(ac) {
            ac.done({});
        }

    };

}, '0.0.1', {requires: ['mojito']});