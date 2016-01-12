define('Note', () => {
    'use strict';

    return React.createClass({
        displayName: 'Note',
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
        const style = {};

        if (this.props.backgroundColor) {
            style.backgroundColor = this.props.backgroundColor;
        }

        return (
            <div className="note" style={style}>
                {this.props.children}
            </div>
        );
    }
});