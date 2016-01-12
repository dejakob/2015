define('Intro', () => {
    'use strict';

    const SLIDE_NAME = 'Intro';

    const Slide = use('Slide');

    let opacity = 1;

    return React.createClass({
        displayName: SLIDE_NAME,
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
            <Slide name={SLIDE_NAME}>
                <div className="wrapper">
                    <h1>Intro</h1>
                    <p>As a yearly tradition, here's my year overview for 2015</p>

                    <div className="background-stuff"></div>
                </div>
            </Slide>
        );
    }
});
