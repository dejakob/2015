define('Slide', function () {
    'use strict';

    let style = {
        position: 'relative',
        overflow: 'visible',
        clear: 'both'
    };

    return React.createClass({
        displayName: 'Slide',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        render,
        destroy
    });

    function getInitialState ()
    {
        return {
        };
    }

    function componentDidMount ()
    {
        Resizer.addWatcher(onWindowResize.bind(this));
        Scroller.addWatcher(onWindowScroll.bind(this));
    }

    function componentWillUnmount ()
    {
        Resizer.clearWatcher(onWindowResize.bind(this));
        Scroller.clearWatcher(onWindowScroll.bind(this));
    }

    function render ()
    {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        const clonedStyle = style.clone();

        return (
            <div className="slide" style={clonedStyle}>
                {this.props.children}
            </div>
        );
    }

    function destroy ()
    {
    }

    function onWindowResize (size)
    {
        if (typeof this.props.name === 'string') {

            const offsetTop = React.findDOMNode(this).offsetTop;

            style.minHeight = `${size.height}px`;

            Scroller.Slides[this.props.name] = offsetTop;

            if (this.isMounted()) {
                this.updater.enqueueForceUpdate(this);
            }
        }
    }

    function onWindowScroll (scrollTop)
    {
        if (this.props.scrollStart) {
            if (scrollTop >= this.props.scrollStart) {
                // Scroller.disableScroll();
            }
        }
    }
});
