/**
 * A simple jQuery-plugin that generates random ids for all elements in the
 * current set that do not yet have one.
 *
 * @author Raphael Pigulla <pigulla@four66.com>
 * @version 0.1.2
 */
(function ($) {
    'use strict';

    function generateId() {
        return ('id' + (+new Date() + Math.random())).replace('.', '');
    }

    $.fn.idfy = function () {
        this.each(function () {
            var id = $(this).attr('id');
            if (typeof id === 'undefined' || id.length === 0) {
                $(this).attr('id', generateId());
            }
        });
        return this;
    };

    $.fn.ids = function () {
        return this.idfy().map(function () {
            return $(this).attr('id');
        }).filter(function (idx, id) {
            return id.length > 0;
        });
    };

    $.fn.id = function () {
        var ids = this.ids();
        return (ids.length === 0 || ids[0].length === 0) ? void(0) : ids[0];
    };
})(jQuery);
