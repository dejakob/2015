define('App', () => {
    'use strict';

    const COLOR_MATCHER_REGEX = /rgba\(([0-9]+),([0-9]+),([0-9]+),(.*)\)/gi;

    // Include all components
    const Alert = use('Alert');
    const FullPreview = use('FullPreview');

    const TwentyFifteen = use('TwentyFifteen');
    const Intro = use('Intro');
    const Quotes = use('Quotes');

    const January = use('January');
    const February = use('February');
    const March = use('March');
    const April = use('April');
    const May = use('May');
    const June = use('June');
    const July = use('July');
    const August = use('August');
    const September = use('September');
    const October = use('October');
    const November = use('November');
    const December = use('December');

    const style = {};

    const mainElement = document.querySelector('#main');

    var currentBackgroundImage = null;

    return React.createClass({
        displayName: 'App',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        componentWillUpdate,
        render
    });

    /**
     * Get the initial state
     */
    function getInitialState ()
    {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount ()
    {
        Scroller.addWatcher(onWindowScroll.bind(this));
    }

    function componentWillUpdate ()
    {
        if (!Scroller || !Scroller.Slides || !Scroller.Slides.Intro || Scroller.Slides.Intro < 50) {
            Resizer.trigger();
        }
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {
        Scroller.clearWatcher(onWindowScroll.bind(this));
    }

    /**
     * Render the component
     */
    function render ()
    {
        const renderedStyle = style.clone();

        return (
            <div style={renderedStyle}>
                <TwentyFifteen></TwentyFifteen>
                <Intro></Intro>
                <January></January>
                <February></February>
                <March></March>
                <April></April>
                <May></May>
                <June></June>
                <July></July>
                <August></August>
                <September></September>
                <October></October>
                <November></November>
                <December></December>

                <Quotes></Quotes>

                <div className="alert">
                    <Alert></Alert>
                </div>
                <FullPreview></FullPreview>
                <div className="clearfix"></div>
            </div>
        );
    }

    function onWindowScroll (scrollTop)
    {

        // 2015
        if (scrollTop < Scroller.Slides.Intro) {
            updateBackgroundColor.call(this, scrollTop, 0, Scroller.Slides.Intro, 'rgba(16,60,184,.8)', 'rgba(0,0,0,1)');
            updateBackground('../assets/waterchair.jpg');
            alert.setOptions({ background: 'rgba(16,60,184,.8)' });
        }

        // Intro
        else if (scrollTop < Scroller.Slides.January) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.Intro, Scroller.Slides.January, 'rgba(0,0,0,1)', 'rgba(76,175,80,0.2)');
            updateBackground('../assets/ice.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,0.6)' });
        }

        // January
        else if (scrollTop < Scroller.Slides.February) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.January, Scroller.Slides.February, 'rgba(76,175,80,0.2)', 'rgba(76,175,80,1)');
            updateBackground('../assets/ice.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }

        // February
        else if (scrollTop < Scroller.Slides.March) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.February, Scroller.Slides.March, 'rgba(76,175,80,1)', 'rgba(230,152,0,1)');
            updateBackground('../assets/ice.jpg');
            alert.setOptions({ background: 'rgba(230,152,0,0.6)' });
        }

        // March
        else if (scrollTop < Scroller.Slides.April) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.March, Scroller.Slides.April, 'rgba(230,152,0,1)', 'rgba(230,152,0,0.4)');
            updateBackground('../assets/googleBikes.jpg');
            alert.setOptions({ background: 'rgba(230,152,0,1)' });
        }

        // April
        else if (scrollTop < Scroller.Slides.May) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.April, Scroller.Slides.May, 'rgba(230,152,0,0.4)', 'rgba(230,152,0,1)');
            updateBackground('../assets/googleBikes.jpg');
            alert.setOptions({ background: 'rgba(230,152,0,1)' });
        }

        // May
        else if (scrollTop < Scroller.Slides.June) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.May, Scroller.Slides.June, 'rgba(230,152,0,1)', 'rgba(6,187,141,1)');
            updateBackground('../assets/googleBikes.jpg');
            alert.setOptions({ background: 'rgba(6,187,141,1)' });
        }

        // June
        else if (scrollTop < Scroller.Slides.July) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.June, Scroller.Slides.July, 'rgba(6,187,141,1)', 'rgba(6,187,141,0.2)');
            updateBackground('../assets/gentseFeesten.jpg');
            alert.setOptions({ background: 'rgba(6,187,141,1)' });
        }

        // July
        else if (scrollTop < Scroller.Slides.August) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.July, Scroller.Slides.August, 'rgba(6,187,141,0.2)', 'rgba(0,44,111,1)');
            updateBackground('../assets/gentseFeesten.jpg');
            alert.setOptions({ background: 'rgba(6,187,141,1)' });
        }

        // August
        else if (scrollTop < Scroller.Slides.September) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.August, Scroller.Slides.September, 'rgba(0,44,111,1)', 'rgba(0,44,111,1)');
            updateBackground('../assets/facts.jpg');
            alert.setOptions({ background: 'rgba(0,44,111,1)' });
        }

        // September
        else if (scrollTop < Scroller.Slides.October) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.September, Scroller.Slides.October, 'rgba(0,44,111,1)', 'rgba(76,175,80,0.2)');
            updateBackground('../assets/facts.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }

        // October
        else if (scrollTop < Scroller.Slides.November) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.October, Scroller.Slides.November, 'rgba(76,175,80,0.2)', 'rgba(76,175,80,1)');
            updateBackground('../assets/facts.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }

        // November
        else if (scrollTop < Scroller.Slides.December) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.November, Scroller.Slides.December, 'rgba(76,175,80,1)', 'rgba(76,175,80,0.2)');
            updateBackground('../assets/barcelona.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }

        // December
        else if (scrollTop < Scroller.Slides.Quotes) {
            updateBackgroundColor.call(this, scrollTop, Scroller.Slides.December, Scroller.Slides.Quotes, 'rgba(76,175,80,0.2)', 'rgba(255,255,255,1)');
            updateBackground('../assets/barcelona.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }

        else {
            style.background = 'rgba(255,255,255,1)';
            this.updater.enqueueForceUpdate(this);
            updateBackground('../assets/barcelona.jpg');
            alert.setOptions({ background: 'rgba(76,175,80,1)' });
        }
    }

    function updateBackgroundColor (scroll, min, max, fromColor, toColor)
    {
        let colorPercentage = (scroll - min) / (max - min);
        let fromColorMatch = (fromColor).replace(/ /gi, '').match(COLOR_MATCHER_REGEX);
        let toColorMatch = (toColor).replace(/ /gi, '').match(COLOR_MATCHER_REGEX);

        if (fromColorMatch && fromColorMatch.length && toColorMatch && toColorMatch.length) {
            style.background = generateBackgroundColor(fromColor, toColor, colorPercentage);
        }

        this.forceUpdate();
    }

    function updateBackground (image)
    {
        if (currentBackgroundImage !== image) {
            currentBackgroundImage = image;
            mainElement.style.backgroundImage = `url(${image})`;
        }
    }

    function generateBackgroundColor (fromColor, toColor, colorPercentage)
    {
        let fromRgba = fromColor.replace(/rgba\(|\)/gi, '').split(',').map(color => Number(color));
        let toRgba = toColor.replace(/rgba\(|\)/gi, '').split(',').map(color => Number(color));

        let redDiff = toRgba[0] - fromRgba[0];
        let greenDiff = toRgba[1] - fromRgba[1];
        let blueDiff = toRgba[2] - fromRgba[2];
        let alphaDiff = toRgba[3] - fromRgba[3];

        return `rgba(${Math.round(fromRgba[0] + colorPercentage * redDiff)},${Math.round(fromRgba[1] + colorPercentage * greenDiff)},${Math.round(fromRgba[2] + colorPercentage * blueDiff)},${fromRgba[3] + colorPercentage * alphaDiff})`;
    }
});
