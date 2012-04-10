/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('baz_binder_bar', function(Y, NAME) {

    Y.namespace('mojito.binders')[NAME] = {

        bind: function(node) {
            Y.log('Bar bound');
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
