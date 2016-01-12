(function () {
    'use strict';

    Object.prototype.clone = clone;

    /**
     * Clones properties to a new object
     * @returns {Object}
     */
    function clone ()
    {
        const self = this;
        const cloned = {};

        Object.keys(this).forEach(key => {
            if (self.hasOwnProperty(key)) {
                cloned[key] = self[key];
            }
        });

        return cloned;
    }
})();
