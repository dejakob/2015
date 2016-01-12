(function () {
    'use strict';

    let watcher = null;

    window.fullPreview = FullPreview;
    FullPreview._setWatcher = setWatcher;

    function FullPreview (mediaUrl)
    {
        if (watcher !== null) {
            watcher(mediaUrl);
        }
    }

    function setWatcher (fullPreviewWatcher)
    {
        watcher = fullPreviewWatcher;
    }
})();