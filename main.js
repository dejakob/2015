'use strict';

(function () {
    'use strict';

    Object.prototype.clone = clone;

    /**
     * Clones properties to a new object
     * @returns {Object}
     */
    function clone() {
        var self = this;
        var cloned = {};

        Object.keys(this).forEach(function (key) {
            if (self.hasOwnProperty(key)) {
                cloned[key] = self[key];
            }
        });

        return cloned;
    }
})();
"use strict";

HTMLElement.prototype.offset = offset;

/**
 * @source https://jsperf.com/test-offset-jquery-vs-vanilla
 * @returns {{top: number, left: number}}
 */
function offset() {
    var rect = this.getBoundingClientRect(),
        bodyElt = document.body;

    return {
        top: rect.top + bodyElt.scrollTop,
        left: rect.left + bodyElt.scrollLeft
    };
}
'use strict';

(function () {
    'use strict';

    var watchers = [];

    window.Resizer = Resizer();

    function Resizer() {
        window.onresize = onWindowResize;

        return {
            addWatcher: addWatcher,
            clearWatcher: clearWatcher,
            trigger: trigger
        };

        function addWatcher(callback) {
            watchers = watchers || [];
            watchers.push(callback);

            onWindowResize();
        }

        function clearWatcher(callback) {
            var index = watchers.indexOf(callback);

            if (index > -1) {
                watchers.splice(index, 1);
            }
        }

        function trigger() {
            onWindowResize();
        }

        function onWindowResize() {
            watchers.forEach(function (watcher) {
                return watcher({ height: window.innerHeight, width: window.innerWidth });
            });
        }
    }
})();
'use strict';

(function () {
    'use strict';

    var mainElement = document.querySelector('#main');
    var watchers = [];

    window.Scroller = Scroller();
    window.Scroller.Slides = {};

    function Scroller() {
        mainElement.onscroll = onWindowScroll;

        return {
            addWatcher: addWatcher,
            clearWatcher: clearWatcher,
            scrollTo: scrollTo,
            enableScroll: enableScroll,
            disableScroll: disableScroll
        };

        function addWatcher(callback) {
            watchers = watchers || [];
            watchers.push(callback);

            onWindowScroll();
        }

        function clearWatcher(callback) {
            var index = watchers.indexOf(callback);

            if (index > -1) {
                watchers.splice(index, 1);
            }
        }

        function scrollTo(position) {
            mainElement.scrollTop = position;
        }

        function onWindowScroll() {
            watchers.forEach(function (watcher) {
                return watcher(mainElement.scrollTop);
            });
        }

        function enableScroll() {
            mainElement.style.overflowY = 'auto';
        }

        function disableScroll() {
            mainElement.style.overflowY = 'hidden';
        }
    }
})();
'use strict';

(function () {
    'use strict';

    var watcher = null;

    window.fullPreview = FullPreview;
    FullPreview._setWatcher = setWatcher;

    function FullPreview(mediaUrl) {
        if (watcher !== null) {
            watcher(mediaUrl);
        }
    }

    function setWatcher(fullPreviewWatcher) {
        watcher = fullPreviewWatcher;
    }
})();