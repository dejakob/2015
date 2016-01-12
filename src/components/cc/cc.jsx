define('CC', () => {
    'use strict';


    return React.createClass({
        displayName: 'CC',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        render,

        showInfo
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
     * Show the CC info
     */
    function showInfo ()
    {
        const title = 'This image was labeled as creative commons';
        const content = `
        Many thanks to ${this.props.author} for sharing this picture with the world.
        `;

        alert(content, title);
    }

    /**
     * Render the component
     */
    function render ()
    {
        return (
            <div className="cc-mark">
                <i className="fa fa-creative-commons" onClick={this.showInfo}></i>
            </div>
        );
    }
});