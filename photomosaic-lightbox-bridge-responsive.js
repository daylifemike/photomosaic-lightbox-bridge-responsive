(function (window) {
    'use strict';
    window.PhotoMosaic.LightboxBridge.responsive = function ($, $mosaic, $items) {
        $mosaic.parent().photoMosaic({
            modal_name : window.rlArgs.selector
        });
    }
}(window));