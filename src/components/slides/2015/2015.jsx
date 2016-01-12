define('TwentyFifteen', function () {
    'use strict';

    const SLIDE_NAME = 'TwentyFifteen';

    const Slide = use('Slide');
    const Square = use('Square');
    const h1Style = {
        color: '#fff'
    };
    const imageStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: '10px',
        right: '10px'
    };

    const TICK = 100;

    let year = 1992;
    let opacity = 1;

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        render,

        showSecurity
    });

    function getInitialState() {
        return {
            style: {}
        };
    }

    function componentDidMount ()
    {
        Resizer.addWatcher(onWindowResize.bind(this));
        setTimeout(yearTicker.bind(this), TICK);
    }

    function componentWillUnmount ()
    {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    function showSecurity ()
    {
        alert('Since the content of this website cannot be served over SSL, we put a logo to guarantee ultimate security', 'Ultimate Security');
    }

    function render ()
    {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        const clonedh1Style = h1Style.clone();
        const clonedImageStyle = imageStyle.clone();

        return (
            <Slide name={SLIDE_NAME}>
                <h1 className="font-digital" style={clonedh1Style}>{year}</h1>
                <span className="arrow-down"><i className="fa fa-arrow-down"></i></span>
            </Slide>
        );
    }

    function onWindowResize (size)
    {
        let height = size.width / 3;

        h1Style.fontSize = `${height}px`;
        h1Style.height = `${height}px`;
        h1Style.paddingTop = `${(size.height - height) / 2}px`;
        h1Style.paddingBottom = `${(size.height - height) / 2}px`;
        h1Style.lineHeight = `${height * 1.1}px`;

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function yearTicker ()
    {
        year++;

        this.forceUpdate();

        if (year < 2015) {
            setTimeout(yearTicker.bind(this), TICK);
        }
    }
});
