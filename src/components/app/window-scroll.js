(function () {
    'use strict';

    const mainElement = document.querySelector('#main');
    let watchers = [];

    window.Scroller = Scroller();
    window.Scroller.Slides = {};

    function Scroller ()
    {
        mainElement.onscroll = onWindowScroll;

        return {
            addWatcher,
            clearWatcher,
            scrollTo,
            enableScroll,
            disableScroll
        };

        function addWatcher (callback)
        {
            watchers = watchers || [];
            watchers.push(callback);

            onWindowScroll();
        }

        function clearWatcher (callback)
        {
            let index = watchers.indexOf(callback);

            if (index > -1) {
                watchers.splice(index, 1);
            }
        }

        function scrollTo (position)
        {
            mainElement.scrollTop = position;
        }

        function onWindowScroll ()
        {
            watchers.forEach(watcher => watcher(mainElement.scrollTop));
        }

        function enableScroll ()
        {
            mainElement.style.overflowY = 'auto';
        }

        function disableScroll ()
        {
            mainElement.style.overflowY = 'hidden';
        }
    }
})();
