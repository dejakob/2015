'use strict';

define('CC', function () {
    'use strict';

    return React.createClass({
        displayName: 'CC',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,

        showInfo: showInfo
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Show the CC info
     */
    function showInfo() {
        var title = 'This image was labeled as creative commons';
        var content = '\n        Many thanks to ' + this.props.author + ' for sharing this picture with the world.\n        ';

        alert(content, title);
    }

    /**
     * Render the component
     */
    function render() {
        return React.createElement("div", { className: "cc-mark" }, React.createElement("i", { className: "fa fa-creative-commons", onClick: this.showInfo }));
    }
});
'use strict';

define('App', function () {
    'use strict';

    var COLOR_MATCHER_REGEX = /rgba\(([0-9]+),([0-9]+),([0-9]+),(.*)\)/gi;

    // Include all components
    var Alert = use('Alert');
    var FullPreview = use('FullPreview');

    var TwentyFifteen = use('TwentyFifteen');
    var Intro = use('Intro');
    var Quotes = use('Quotes');

    var January = use('January');
    var February = use('February');
    var March = use('March');
    var April = use('April');
    var May = use('May');
    var June = use('June');
    var July = use('July');
    var August = use('August');
    var September = use('September');
    var October = use('October');
    var November = use('November');
    var December = use('December');

    var style = {};

    var mainElement = document.querySelector('#main');

    var currentBackgroundImage = null;

    return React.createClass({
        displayName: 'App',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        componentWillUpdate: componentWillUpdate,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        Scroller.addWatcher(onWindowScroll.bind(this));
    }

    function componentWillUpdate() {
        if (!Scroller || !Scroller.Slides || !Scroller.Slides.Intro || Scroller.Slides.Intro < 50) {
            Resizer.trigger();
        }
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {
        Scroller.clearWatcher(onWindowScroll.bind(this));
    }

    /**
     * Render the component
     */
    function render() {
        var renderedStyle = style.clone();

        return React.createElement("div", { style: renderedStyle }, React.createElement(TwentyFifteen, null), React.createElement(Intro, null), React.createElement(January, null), React.createElement(February, null), React.createElement(March, null), React.createElement(April, null), React.createElement(May, null), React.createElement(June, null), React.createElement(July, null), React.createElement(August, null), React.createElement(September, null), React.createElement(October, null), React.createElement(November, null), React.createElement(December, null), React.createElement(Quotes, null), React.createElement("div", { className: "alert" }, React.createElement(Alert, null)), React.createElement(FullPreview, null), React.createElement("div", { className: "clearfix" }));
    }

    function onWindowScroll(scrollTop) {

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
                                                            } else {
                                                                style.background = 'rgba(255,255,255,1)';
                                                                this.updater.enqueueForceUpdate(this);
                                                                updateBackground('../assets/barcelona.jpg');
                                                                alert.setOptions({ background: 'rgba(76,175,80,1)' });
                                                            }
    }

    function updateBackgroundColor(scroll, min, max, fromColor, toColor) {
        var colorPercentage = (scroll - min) / (max - min);
        var fromColorMatch = fromColor.replace(/ /gi, '').match(COLOR_MATCHER_REGEX);
        var toColorMatch = toColor.replace(/ /gi, '').match(COLOR_MATCHER_REGEX);

        if (fromColorMatch && fromColorMatch.length && toColorMatch && toColorMatch.length) {
            style.background = generateBackgroundColor(fromColor, toColor, colorPercentage);
        }

        this.forceUpdate();
    }

    function updateBackground(image) {
        if (currentBackgroundImage !== image) {
            currentBackgroundImage = image;
            mainElement.style.backgroundImage = 'url(' + image + ')';
        }
    }

    function generateBackgroundColor(fromColor, toColor, colorPercentage) {
        var fromRgba = fromColor.replace(/rgba\(|\)/gi, '').split(',').map(function (color) {
            return Number(color);
        });
        var toRgba = toColor.replace(/rgba\(|\)/gi, '').split(',').map(function (color) {
            return Number(color);
        });

        var redDiff = toRgba[0] - fromRgba[0];
        var greenDiff = toRgba[1] - fromRgba[1];
        var blueDiff = toRgba[2] - fromRgba[2];
        var alphaDiff = toRgba[3] - fromRgba[3];

        return 'rgba(' + Math.round(fromRgba[0] + colorPercentage * redDiff) + ',' + Math.round(fromRgba[1] + colorPercentage * greenDiff) + ',' + Math.round(fromRgba[2] + colorPercentage * blueDiff) + ',' + (fromRgba[3] + colorPercentage * alphaDiff) + ')';
    }
});
'use strict';

define('Facebook', function () {
    'use strict';

    var previewHeight = '10px';

    return React.createClass({
        displayName: 'Facebook',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,

        showPreview: showPreview
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        Resizer.addWatcher(onWindowResize.bind(this));
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    function showPreview() {
        fullPreview(this.props.image);
    }

    /**
     * Render the component
     */
    function render() {
        var url = this.props.url;
        var bgImageStyle = {
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + this.props.image + ')',
            height: previewHeight
        };
        var style = this.props.style;
        var preview = '';

        if (this.props.image) {
            preview = React.createElement("div", { className: "item-image", style: bgImageStyle, onClick: this.showPreview });
        }

        if (this.props.youtube) {
            var ytUrl = 'https://www.youtube.com/embed/' + this.props.youtube;
            var ytStyle = {
                border: 'none',
                height: previewHeight,
                width: '100%'
            };

            preview = React.createElement("div", { className: "item-image" }, React.createElement("iframe", { width: "100%", style: ytStyle, src: ytUrl, frameborder: "0", allowfullscreen: true }));
        }

        return React.createElement("div", { className: "item facebook", style: style }, preview, React.createElement("div", { className: "item-description" }, React.createElement("a", { href: url, title: "Open tweet", target: "_blank" }, React.createElement("i", { className: "fa fa-facebook" })), React.createElement("p", null, this.props.text), React.createElement("p", { className: "small" }, this.props.time)));
    }

    function onWindowResize(size) {
        previewHeight = size.height - 300 + 'px';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }
});
'use strict';

define('LinkGame', function () {
    'use strict';

    var gameHeight = 0;
    var gameWidth = 0;
    var buttonWidth = 200;
    var buttonHeight = 30;

    var style = {
        width: '100%',
        margin: '20px 0'
    };
    var buttonStyle = {};
    var holder = {
        height: '100%',
        width: '100%'
    };

    return React.createClass({
        displayName: 'LinkGame',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        Resizer.addWatcher(onWindowResize.bind(this));
        onMouseMove.call(this);
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    /**
     * @param {Object} size
     */
    function onWindowResize(size) {
        gameHeight = size.height / 2;
        gameWidth = React.findDOMNode(this).clientWidth;
        style.height = size.height / 2 + 'px';

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function onMouseMove() {
        var randomTop = parseInt(Math.random() * (gameHeight / 2 - 30) + 60);
        var randomLeft = parseInt(Math.random() * (gameWidth - 350) + 60);

        buttonStyle.left = randomLeft + 'px';
        buttonStyle.top = randomTop + 'px';

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function openLink() {
        window.location.href = this.props.link;
    }

    /**
     * Render the component
     */
    function render() {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        var clonedStyle = style.clone();
        var clonedButtonStyle = buttonStyle.clone();
        var clonedHolderStyle = holder.clone();

        return React.createElement("div", { className: "link-game", style: clonedStyle, onMouseMove: onMouseMove.bind(this) }, React.createElement("div", { className: "holder", style: clonedHolderStyle }), React.createElement("button", { style: clonedButtonStyle, onClick: openLink.bind(this) }, React.createElement("i", { className: "fa fa-download" }), " ", this.props.text));
    }
});
'use strict';

define('FullPreview', function () {
    'use strict';

    var style = {
        display: 'none'
    };
    var content = '';

    return React.createClass({
        displayName: 'FullPreview',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,

        hide: hide
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        fullPreview._setWatcher(setMedia.bind(this));
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    function setMedia(media) {
        style.backgroundImage = 'url(' + media + ')';
        style.display = 'block';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }

    function hide() {
        style.display = 'none';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }

    /**
     * Render the component
     */
    function render() {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        var clonedStyle = style.clone();

        return React.createElement("div", { className: "full-preview", style: clonedStyle, onClick: this.hide });
    }
});
'use strict';

define('Slide', function () {
    'use strict';

    var style = {
        position: 'relative',
        overflow: 'visible',
        clear: 'both'
    };

    return React.createClass({
        displayName: 'Slide',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,
        destroy: destroy
    });

    function getInitialState() {
        return {};
    }

    function componentDidMount() {
        Resizer.addWatcher(onWindowResize.bind(this));
        Scroller.addWatcher(onWindowScroll.bind(this));
    }

    function componentWillUnmount() {
        Resizer.clearWatcher(onWindowResize.bind(this));
        Scroller.clearWatcher(onWindowScroll.bind(this));
    }

    function render() {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        var clonedStyle = style.clone();

        return React.createElement("div", { className: "slide", style: clonedStyle }, this.props.children);
    }

    function destroy() {}

    function onWindowResize(size) {
        if (typeof this.props.name === 'string') {

            var offsetTop = React.findDOMNode(this).offsetTop;

            style.minHeight = size.height + 'px';

            Scroller.Slides[this.props.name] = offsetTop;

            if (this.isMounted()) {
                this.updater.enqueueForceUpdate(this);
            }
        }
    }

    function onWindowScroll(scrollTop) {
        if (this.props.scrollStart) {
            if (scrollTop >= this.props.scrollStart) {
                // Scroller.disableScroll();
            }
        }
    }
});
'use strict';

define('SlideContent', function () {
    'use strict';

    var children = null;
    var slideScroll = 0;
    var oldScrollTop = 0;

    return React.createClass({
        displayName: 'SlideContent',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement("div", { className: "slide-content" }, this.props.children);
    }
});
'use strict';

define('Square', function () {
    'use strict';

    var style = {
        transform: 'rotate(45deg)',
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.2)',
        bottom: '-51px',
        right: '-51px'
    };

    return React.createClass({
        displayName: 'Square',
        getInitialState: getInitialState,
        render: render
    });

    function getInitialState() {
        return {};
    }

    function render() {
        var size = Number(this.props.size) || 100;
        var borderWidth = Number(this.props.border) || 1;

        style.height = style.width = size + 'px';
        style.bottom = style.right = '-' + (size / 2 + borderWidth) + 'px';
        style.border = borderWidth + 'px #fff solid';

        return React.createElement("div", { style: style });
    }
});
'use strict';

define('Tweet', function () {
    'use strict';

    var previewHeight = '10px';

    return React.createClass({
        displayName: 'Tweet',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,

        showPreview: showPreview
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        Resizer.addWatcher(onWindowResize.bind(this));
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    function showPreview() {
        fullPreview(this.props.image);
    }

    /**
     * Render the component
     */
    function render() {
        var url = 'https://twitter.com/dejakob/status/' + this.props.status;
        var bgImageStyle = {
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(' + this.props.image + ')',
            height: previewHeight
        };
        var style = this.props.style;
        var preview = '';

        if (this.props.image) {
            preview = React.createElement("div", { className: "item-image", style: bgImageStyle, onClick: this.showPreview });
        }

        if (this.props.youtube) {
            var ytUrl = 'https://www.youtube.com/embed/' + this.props.youtube;
            var ytStyle = {
                border: 'none',
                height: previewHeight,
                width: '100%'
            };

            preview = React.createElement("div", { className: "item-image" }, React.createElement("iframe", { width: "100%", style: ytStyle, src: ytUrl, frameborder: "0", allowfullscreen: true }));
        }

        return React.createElement("div", { className: "item tweet", style: style }, preview, React.createElement("div", { className: "item-description" }, React.createElement("a", { href: url, title: "Open tweet", target: "_blank" }, React.createElement("i", { className: "fa fa-twitter" })), React.createElement("p", null, this.props.text), React.createElement("p", { className: "small" }, this.props.time)));
    }

    function onWindowResize(size) {
        previewHeight = size.height - 300 + 'px';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }
});
'use strict';

define('Note', function () {
    'use strict';

    return React.createClass({
        displayName: 'Note',
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        var style = {};

        if (this.props.backgroundColor) {
            style.backgroundColor = this.props.backgroundColor;
        }

        return React.createElement("div", { className: "note", style: style }, this.props.children);
    }
});
'use strict';

define('TwentyFifteen', function () {
    'use strict';

    var SLIDE_NAME = 'TwentyFifteen';

    var Slide = use('Slide');
    var Square = use('Square');
    var h1Style = {
        color: '#fff'
    };
    var imageStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: '10px',
        right: '10px'
    };

    var TICK = 100;

    var year = 1992;
    var opacity = 1;

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render,

        showSecurity: showSecurity
    });

    function getInitialState() {
        return {
            style: {}
        };
    }

    function componentDidMount() {
        Resizer.addWatcher(onWindowResize.bind(this));
        setTimeout(yearTicker.bind(this), TICK);
    }

    function componentWillUnmount() {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    function showSecurity() {
        alert('Since the content of this website cannot be served over SSL, we put a logo to guarantee ultimate security', 'Ultimate Security');
    }

    function render() {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        var clonedh1Style = h1Style.clone();
        var clonedImageStyle = imageStyle.clone();

        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("h1", { className: "font-digital", style: clonedh1Style }, year), React.createElement("span", { className: "arrow-down" }, React.createElement("i", { className: "fa fa-arrow-down" })));
    }

    function onWindowResize(size) {
        var height = size.width / 3;

        h1Style.fontSize = height + 'px';
        h1Style.height = height + 'px';
        h1Style.paddingTop = (size.height - height) / 2 + 'px';
        h1Style.paddingBottom = (size.height - height) / 2 + 'px';
        h1Style.lineHeight = height * 1.1 + 'px';

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function yearTicker() {
        year++;

        this.forceUpdate();

        if (year < 2015) {
            setTimeout(yearTicker.bind(this), TICK);
        }
    }
});
'use strict';

define('April', function () {
    'use strict';

    var SLIDE_NAME = 'April';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');
    var SlideContent = use('SlideContent');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME)), React.createElement(Note, { backgroundColor: "#E4A000" }, React.createElement("i", { className: "fa fa-plane" }), " " + ' ' + "Woohoow! Trip to San Francisco! ", React.createElement("i", { className: "fa fa-plane" }), React.createElement("i", { className: "fa fa-plane" }), React.createElement("i", { className: "fa fa-plane" })), React.createElement("div", { className: "wrapper" }, React.createElement(Tweet, { status: "585686865283547136",
            text: "I'm at Brussels Airport (BRU) in Zaventem, Vlaams-Brabant",
            time: "8 Apr 2015",
            link: "https://t.co/Wtz6zsJ4dJ",
            image: "../assets/airplane.jpg"
        }), React.createElement(Tweet, { status: "586240752252035072",
            text: "I'm at Pier 35 in San Francisco, CA",
            time: "9 Apr 2015",
            link: "https://t.co/M8Roz23MuX",
            image: "../assets/pier.jpg"
        }), React.createElement(Tweet, { status: "586526160986714112",
            text: "I'm at Hostelling International - @hiusaggc in San Francisco, CA",
            time: "10 Apr 2015",
            link: "https://t.co/4oUFUt5DHJ",
            image: "../assets/hostel.jpg"
        }), React.createElement(Tweet, { status: "586552218670751746",
            text: "I'm at Golden Gate Bridge - @ggbridge in San Francisco, CA",
            time: "10 Apr 2015",
            link: "https://t.co/O3ijUVoIBv",
            image: "../assets/bridge.jpg"
        }), React.createElement(Tweet, { status: "586572983814225922",
            text: "I'm at VMware, Inc. in Palo Alto, CA",
            time: "10 Apr 2015",
            link: "https://t.co/SFnWVooJlJ",
            image: "../assets/vmware.jpg"
        }), React.createElement(Tweet, { status: "586980268193353728",
            text: "I'm at Santa Cruz in Santa Cruz, CA",
            time: "11 Apr 2015",
            link: "https://t.co/xLt08nRWmY",
            image: "../assets/santaCruz.jpg"
        }), React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/photo.php?fbid=888847051154049&set=a.452807001424725.98241.100000862866272&type=3&theater",
            image: "https://scontent-bru2-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/s2048x2048/10887132_888847051154049_8060911923990607891_o.jpg",
            time: "12 Apr 2015",
            text: " "
        }), React.createElement(Tweet, { status: "588012209311186945",
            text: "I'm at Googleplex - @google in Mountain View, CA w/ @jokevangheluwe @jessjoanna",
            time: "14 Apr 2015",
            link: "https://t.co/tLbWsQKywX",
            image: "../assets/google.jpg"
        }), React.createElement(Tweet, { status: "588369972935667713",
            text: "I'm at @GitHub HQ 3.0 in San Francisco, CA w/ @jokevangheluwe @jessjoanna @solvesoul @sandrien_l",
            time: "15 Apr 2015",
            link: "https://t.co/FunpyIdSyT",
            image: "../assets/github.jpg"
        }), React.createElement(Tweet, { status: "588185024421216256",
            text: "Paul Irish: @dejakob nice work. :)",
            time: "14 Apr 2015",
            link: "https://twitter.com/paul_irish/status/588185024421216256"
        }), React.createElement(Tweet, { status: "588183213396246528",
            text: "Colt McAnlis: @dejakob +10 points for knowing about pagespeed.",
            time: "15 Apr 2015",
            link: "https://twitter.com/duhroach/status/588183213396246528"
        }), React.createElement(Tweet, { status: "588398836781056000",
            text: "I'm at Zynga in San Francisco, CA",
            time: "15 Apr 2015",
            link: "https://t.co/yGVSu1AF0I",
            image: "../assets/zynga.jpg"
        })), React.createElement(Note, { backgroundColor: "#E4A000" }, "Getting ", React.createElement("i", { className: "fa fa-fire-extinguisher" }), " at Massvive//Media"), React.createElement(Note, { backgroundColor: "#E4A000" }, "Job hunt ... Luckily I met this lil' startup in San Francisco ..."), React.createElement("div", { className: "wrapper" }, React.createElement("img", { src: "../assets/showpad.png", className: "showpad-logo", height: "200px", alt: "Showpad logo" })));
    }
});
'use strict';

define('December', function () {
    'use strict';

    var SLIDE_NAME = 'December';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Tweet, { status: "673562269339414528",
            text: "I just reinvented #alert with #reactjs Check it out here: http://geoow.github.io/geoow-alert/ #javascript",
            time: "6 Dec 2015"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/1000040136701406",
            text: "Jakob Kerkhove checked in to Barcelona–El Prat Airport.",
            time: "8 Dec 2015"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/1001540419884711",
            text: "Skate paradise...",
            time: "11 Dec 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12374932_1001540069884746_4765478037174788480_o.jpg"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=1008422225863197&set=a.452807001424725.98241.100000862866272&type=3&theater",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/5863_1008422225863197_6318219986736660609_n.jpg?oh=72d78d9ee9438e25cd22640171f4d0f9&oe=57442D14",
            text: "Kerstavond op deze plaats, het is eens wat anders",
            time: "24 Dec 2015"
        })));
    }
});
'use strict';

define('February', function () {
    'use strict';

    var SLIDE_NAME = 'February';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');
    var Tweet = use('Tweet');
    var Note = use('Note');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Tweet, { status: "564051311512268800",
            text: "I'm at AS Adventure in Sint-Denijs-Westrem, Belgium",
            link: "http://swarmapp.com/c/g5UMcnTdH35 ",
            time: "7 Feb 2015"
        })), React.createElement(Note, null, "February was a boring month I acknowledge..."));
    }
});
'use strict';

define('Intro', function () {
    'use strict';

    var SLIDE_NAME = 'Intro';

    var Slide = use('Slide');

    var opacity = 1;

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, "Intro"), React.createElement("p", null, "As a yearly tradition, here's my year overview for 2015"), React.createElement("div", { className: "background-stuff" })));
    }
});
'use strict';

define('January', function () {
    'use strict';

    var SLIDE_NAME = 'January';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');

    var Tweet = use('Tweet');
    var CC = use('CC');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(SlideContent, null, React.createElement(Tweet, { status: "560171535689084928",
            text: "Woohoow, trying iOS for the first time",
            link: "http://prntscr.com/5xua76",
            time: "27 Jan 2015",
            image: "../assets/ios.jpg"
        }), React.createElement(Tweet, { status: "560696649794994176",
            text: "I'm at Station Deinze - @nmbs in Deinze, Oost-Vlaanderen",
            link: "https://www.swarmapp.com/c/1F1svLsfeX6",
            time: "29 Jan 2015"
        }))), React.createElement(CC, { author: "Moyan Bren", url: "https://www.flickr.com/photos/aigle_dore/9997830314" }));
    }
});
'use strict';

define('July', function () {
    'use strict';

    var SLIDE_NAME = 'July';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');
    var Facebook = use('Facebook');
    var Tweet = use('Tweet');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Tweet, { status: "618163921350995968",
            text: "#woohoow Creating my first #gulp #npm module: gulp-mobile-first",
            link: "https://t.co/S77Fv3g6JO",
            time: "6 July 2015"
        }), React.createElement(Tweet, { status: "621798232545476609",
            text: "I hereby declare that I will never ever forget flushing $httpBackend ever again... #karma #AngularJS #wastedTooMuchTime",
            time: "16 July 2015"
        }), React.createElement(Tweet, { status: "622165245688184832",
            text: "They did a great job #gentsefeesten #meanwhileinghent",
            time: "17 July 2015",
            image: "https://pbs.twimg.com/media/CKJf_NYUMAAgE_Q.jpg"
        }), React.createElement(Tweet, { status: "624270912653819904",
            text: "Vip biatch #gentsefeesten",
            time: "23 July 2015",
            image: "https://pbs.twimg.com/media/CKnbFIGWsAAxLKq.jpg"
        }), React.createElement(Tweet, { status: "625033042294362112",
            text: "As a guy, you never know how happy you are until you have to pee @ #gentsefeesten #wishyouluck ladies #polepole",
            time: "25 July 2015"
        }), React.createElement(Tweet, { status: "627131197638971392",
            text: "Undefined is not a function it said... #JS #JavaScript",
            time: "31 July 2015",
            image: "http://i.imgur.com/nTYx68p.png"
        })));
    }
});
'use strict';

define('June', function () {
    'use strict';

    var SLIDE_NAME = 'June';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');
    var Facebook = use('Facebook');
    var Tweet = use('Tweet');
    var Note = use('Note');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/913958998642854",
            time: "2 June 2015",
            text: "A lot of people ask me what we're actually doing where I work nowadays. To all those people: sit back, relax and watch a vid",
            youtube: "rUZ9eNiATGM"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=918366724868748&set=a.185876698117758.36299.100000862866272&type=3&theater",
            time: "10 June 2015",
            text: "Making Bert Verhelst jealous :)",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/11415599_918366724868748_757770603358896811_o.jpg"
        }), React.createElement(Tweet, { status: "613994522578563072",
            text: "#lodash, I beated you this time. Come on, give me your best shot!",
            time: "25 June 2015",
            link: "http://t.co/pGlNk3Niaj"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=926788970693190&set=a.452807001424725.98241.100000862866272&type=3&theater",
            time: "26 June 2015",
            text: "Fancy friday xd",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xlf1/v/t1.0-9/11232014_926788970693190_9105756822964668623_n.jpg?oh=72b6cc743068bf93760c122e0a0e228b&oe=571074CE"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/927537360618351",
            time: "28 June 2015",
            text: "My bank is amazing! They are already helping me the entire weekend not wasting my money on unnecessary things like buying food n stuff..."
        })), React.createElement(Note, null, "Yeah, also changed my profile pic for this :)"), React.createElement("div", { className: "wrapper" }, React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=927650200607067&set=a.145248142180614.16143.100000862866272&type=3&theater",
            text: " ",
            time: "28 June 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11206113_927650200607067_2320183483285691805_n.jpg?oh=9813d5988fb0810cd3989bb63d93cb8f&oe=573D5536"
        })));
    }
});
'use strict';

define('May', function () {
    'use strict';

    var SLIDE_NAME = 'May';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');
    var Facebook = use('Facebook');
    var Tweet = use('Tweet');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Tweet, { status: "596409233563918337",
            text: "I'm at Cantina Cubana 2015",
            time: "7 May 2015",
            link: "https://t.co/PAehFZqwId",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/10169463_10206277930816901_8700911147555837726_n.jpg?oh=0da51305f3383ce4d4530ad3a96f9c36&oe=573E6C80"
        }), React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/dejakob/posts/903933869645367",
            time: "11 May 2015",
            text: "Since it's official, I can share it on Facebook." + ' ' + "Next week I'll be part of the Showpad team! ‪#‎woohoow‬!"
        }), React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/100000862866272/posts/906380172734070/",
            time: "17 May 2015",
            text: "Skated 30km"
        }), React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/dejakob/posts/907272009311553",
            time: "19 May 2015",
            text: "One of my favourites :)",
            youtube: "PvVhUo-PvVI"
        }), React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/dejakob/posts/911235305581890",
            time: "29 May 2015",
            text: "I feel the pain bro :)",
            youtube: "vTTzwJsHpU8"
        })));
    }
});
'use strict';

define('November', function () {
    'use strict';

    var SLIDE_NAME = 'November';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=986409311397822&set=a.452807001424725.98241.100000862866272&type=3&theater",
            text: "Den Jakez gaat ook ne keer uitgaan....",
            time: "5 Nov 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/12196002_986409311397822_1719574698457935365_n.jpg?oh=ac8824616827dd1a53f8c30ba955fe8e&oe=56FFFD57"
        }), React.createElement(Facebook, { text: "Come on, super cool fancy tech event in Ghent, limited spots...",
            url: "https://www.facebook.com/dejakob/posts/991695564202530",
            time: "18 Nov 2015",
            image: "../assets/gears.jpg"
        }), React.createElement(Tweet, { status: "669559018432630784",
            text: "I gotta say, since #ES2015 I love using the ` key #javascript",
            time: "25 Nov 2015"
        })));
    }
});
'use strict';

define('March', function () {
    'use strict';

    var SLIDE_NAME = 'March';

    var Slide = use('Slide');
    var SlideContent = use('SlideContent');
    var Facebook = use('Facebook');
    var Tweet = use('Tweet');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        var ad = '\n        <!-- 2015 -->\n        <ins class="adsbygoogle"\n             style="display:block"\n             data-ad-client="ca-pub-5488735990396666"\n             data-ad-slot="9656993371"\n             data-ad-format="auto"></ins>\n        <script>\n            (adsbygoogle = window.adsbygoogle || []).push({});\n        </script>\n        ';

        this.getDOMNode().innerHTML += ad;
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(SlideContent, null, React.createElement(Facebook, { source: "facebook",
            url: "https://www.facebook.com/photo.php?fbid=877308438974577&set=a.452807001424725.98241.100000862866272&type=3",
            image: "https://scontent-ams2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10998018_877308438974577_6882755184111889666_n.jpg?oh=4640f05bf6ae01b96fe501fbda011315&oe=57497669",
            time: "20 March 2015",
            text: "Jakez official fan club (R)"
        }), React.createElement(Tweet, { status: "581034315460415490",
            text: "I'm 97% rockstar! How much of a rockstar are you?",
            time: "26 March 2015",
            link: "http://t.co/Uh95XNlDcm" }))));
    }
});
'use strict';

define('August', function () {
    'use strict';

    var SLIDE_NAME = 'August';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Tweet, { status: "628868983232589824",
            text: "New definition of #yolo: you only load once #perfmatters #angularjs",
            time: "5 Aug 2015"
        }), React.createElement(Tweet, { status: "629583709818241024",
            text: "Working at @showpad = playing with #lego",
            image: "https://pbs.twimg.com/media/CLy7CpEWIAA7WPl.jpg",
            time: "7 Aug 2015"
        }), React.createElement(Tweet, { status: "630027079237660672",
            text: "#meanwhileinghent ",
            youtube: "avXdkGFonT4",
            time: "8 Aug 2015"
        })), React.createElement(Note, { backgroundColor: "#003b94" }, "Hell yeah, I went to #PKP15 and it was fucking epic!"), React.createElement("div", { className: "wrapper" }, React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/952911404747613",
            time: "23 Aug 2015",
            youtube: "UtMOWecObik",
            text: "Nog wat nagenieten van ‪#‎pkp15‬ :)"
        })), React.createElement(Note, { backgroundColor: "#003b94" }, "Well, I love the city itself :)"), React.createElement("div", { className: "wrapper" }, React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=955547021150718&set=a.452807001424725.98241.100000862866272&type=3&theater",
            time: "29 Aug 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11895992_955547021150718_1976980271378433908_n.jpg?oh=2dd69df5a1541e053a7dcdceda9d5f37&oe=57418BD4",
            text: "Yay officially living in Gent"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/955755907796496",
            time: "29 Aug 2015",
            text: "Visiting Wevelgem today. It's so amazing! (yeah I took the wrong train stop...)"
        })));
    }
});
'use strict';

define('October', function () {
    'use strict';

    var SLIDE_NAME = 'October';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {}

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME)), React.createElement(Note, null, "Yeah, I went to facts!"), React.createElement("div", { className: "wrapper" }, React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=10206487367875578&set=a.10204014491095204.1073741830.1011296512&type=3&theater",
            text: " ",
            time: "6 Oct 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xat1/t31.0-8/12068414_10206487367875578_4176558375613037532_o.jpg"
        }), React.createElement(Facebook, { url: "#",
            text: " ",
            time: "6 Oct 2015",
            image: "../assets/steffi.jpg"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/980128618692558",
            text: "What if we remove timezones?",
            time: "20 Oct 2015"
        }), React.createElement(Tweet, { status: "657294127407714304",
            text: "Made my own #karma guide for writing painless #angularjs tests: http://dejakob.com/ng-karma/?twitter … #javascript #unittesting #useandimprove",
            time: "22 Oct 2015"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/photo.php?fbid=983905901648163&set=a.145248142180614.16143.100000862866272&type=3&permPage=1",
            text: " ",
            time: "30 Oct 2015",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12193645_983905901648163_6626191630949245211_n.jpg?oh=1f39ec8a87e222e528ab80f4e13b1225&oe=573E5C78"
        })));
    }
});
'use strict';

define('Quotes', function () {
    'use strict';

    var SLIDE_NAME = 'Quotes';
    var QUOTES = [{ content: 'You can not rely on unit tests if your unit tests are not reliable', author: 'Klaas Cuvelier' }, { content: 'The internet is full of shit', author: 'Colt McAnlis' }, { content: 'Just chill man', author: 'Mike Warner' }, { content: 'you\'re gonna go far kid', author: 'Ivan Stoilov' }, { content: 'Gaat alleen maar verbeteren peisk', author: 'Peter-Jan Brone' }, { content: 'Ik geloof echt dat je goed bezig bent', author: 'Jan Deschuttere' }, { content: 'Nothing is ever perfect', author: 'Jakub Slocki' }, { content: 'Maarten is checking out the slaves', author: 'Louis Van de Calseyde' }, { content: 'PRUTS ALL THE THINGS', author: 'Jelle Nagels' }];

    var Slide = use('Slide');

    var quote = QUOTES[0];
    var timeout = null;

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        changeQuote.call(this);
    }

    function changeQuote() {
        var index = parseInt(Math.random() * QUOTES.length);

        quote = QUOTES[index];
        timeout = setTimeout(changeQuote.bind(this), 4000);
        this.forceUpdate();
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {
        try {
            clearTimeout(timeout);
        } catch (ex) {}
    }

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper quotes" }, React.createElement("h1", null, "Quotes of 2015"), React.createElement("div", { className: "quote" }, React.createElement("span", { className: "quote-open" }, React.createElement("i", { className: "fa fa-quote-left" })), React.createElement("span", { className: "content" }, quote.content), React.createElement("span", { className: "quote-close" }, React.createElement("i", { className: "fa fa-quote-right" })), React.createElement("span", { className: "author" }, quote.author))));
    }
});
'use strict';

define('September', function () {
    'use strict';

    var SLIDE_NAME = 'September';

    var Slide = use('Slide');
    var Note = use('Note');
    var Tweet = use('Tweet');
    var Facebook = use('Facebook');

    return React.createClass({
        displayName: SLIDE_NAME,
        getInitialState: getInitialState,
        componentDidMount: componentDidMount,
        componentWillUnmount: componentWillUnmount,
        render: render
    });

    /**
     * Get the initial state
     */
    function getInitialState() {
        return {};
    }

    /**
     * When the component mounts
     */
    function componentDidMount() {
        var ad = '\n        <!-- 2015 -->\n        <ins class="adsbygoogle"\n             style="display:block"\n             data-ad-client="ca-pub-5488735990396666"\n             data-ad-slot="9656993371"\n             data-ad-format="auto"></ins>\n        <script>\n            (adsbygoogle = window.adsbygoogle || []).push({});\n        </script>\n        ';

        this.getDOMNode().innerHTML += ad;
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount() {}

    /**
     * Render the component
     */
    function render() {
        return React.createElement(Slide, { name: SLIDE_NAME }, React.createElement("div", { className: "wrapper" }, React.createElement("h1", null, SLIDE_NAME), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/961441803894573",
            text: "Jakob Kerkhove shared Mario Haneca's photo.",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/11168916_937283462995769_6496683731828897752_o.jpg",
            time: "9 Sep 2015"
        }), React.createElement(Tweet, { status: "644611951360917505",
            text: "Who's going to @ATC_BAND next week in Antwerp? #ATC",
            time: "17 Sep 2015"
        }), React.createElement(Facebook, { url: "https://www.facebook.com/dejakob/posts/961441803894573",
            text: " ",
            image: "https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/11168916_937283462995769_6496683731828897752_o.jpg",
            time: "23 Sep 2015",
            youtube: "y-MaaxgdUT4"
        }), React.createElement(Tweet, { status: "648578265318297600",
            text: "https://ulule.com/quizwitz everyone should support these guys. They're awesome!",
            time: "28 Sep 2015",
            link: "https://ulule.com/quizwitz"
        })));
    }
});