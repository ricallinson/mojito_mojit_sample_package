/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('baz_binder_foo', function(Y, NAME) {

    Y.namespace('mojito.binders')[NAME] = {

        bind: function(node) {
            Y.log('Foo bound');
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
