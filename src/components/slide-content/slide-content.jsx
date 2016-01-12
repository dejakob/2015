define('SlideContent', () => {
    'use strict';

    let children = null;
    let slideScroll = 0;
    let oldScrollTop = 0;

    return React.createClass({
        displayName: 'SlideContent',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
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
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {
    }

    /**
     * Render the component
     */
    function render ()
    {
        return (
            <div className="slide-content">
                {this.props.children}
            </div>
        );
    }
});
