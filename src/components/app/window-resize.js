(function () {
    'use strict';

    let watchers = [];

    window.Resizer = Resizer();

    function Resizer ()
    {
        window.onresize = onWindowResize;

        return {
            addWatcher,
            clearWatcher,
            trigger
        };

        function addWatcher (callback)
        {
            watchers = watchers || [];
            watchers.push(callback);

            onWindowResize();
        }

        function clearWatcher (callback)
        {
            let index = watchers.indexOf(callback);

            if (index > -1) {
                watchers.splice(index, 1);
            }
        }

        function trigger ()
        {
            onWindowResize();
        }

        function onWindowResize ()
        {
            watchers.forEach(watcher => watcher({ height: window.innerHeight, width: window.innerWidth }));
        }
    }
})();
