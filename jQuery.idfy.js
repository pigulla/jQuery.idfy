/**
 * A simple jQuery-plugin that generates random ids for all elements in the
 * current set that do not yet have one.
 *
 * @author Raphael Pigulla <pigulla@four66.com>
 * @version 0.1.6
 */
(function ($) {
    'use strict';

    function generateId() {
        return ('id' + (+new Date() + Math.random())).replace('.', '');
    }

    /*jshint unused: false*/
    $.fn.idfy = function (options) {
        this.each(function () {
            if (typeof $(this).attr('id') === 'undefined') {
                $(this).attr('id', generateId());
            }
        });
        return this;
    };

    $.fn.ids = function (options) {
        return this.idfy().map(function () {
            return $(this).attr('id');
        });
    };

    $.fn.id = function (options) {
        var ids = this.ids();
        return ids.length > 0 ? ids[0] : void(0);
    };
})(jQuery);
