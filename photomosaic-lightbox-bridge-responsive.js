(function (window) {
    'use strict';
    window.PhotoMosaic.LightboxBridge.responsive = function ($, $mosaic, $items) {
        $mosaic.parent().photoMosaic({
            modal_name : window.rlArgs.selector
        });

        setTimeout(function(){
            $.event.trigger({
                type : 'doResponsiveLightbox',
                script : window.rlArgs.script,
                selector : window.rlArgs.selector,
                args : window.rlArgs
            });
        }, 0);
    }
}(window));