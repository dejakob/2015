define('February', () => {
    'use strict';

    const SLIDE_NAME = 'February';

    const Slide = use('Slide');
    const SlideContent = use('SlideContent');
    const Tweet = use('Tweet');
    const Note = use('Note');

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
                    <h1>{SLIDE_NAME}</h1>

                    <Tweet status="564051311512268800"
                        text="I'm at AS Adventure in Sint-Denijs-Westrem, Belgium"
                        link="http://swarmapp.com/c/g5UMcnTdH35 "
                        time="7 Feb 2015"
                    ></Tweet>
                </div>

                <Note>
                    February was a boring month I acknowledge...
                </Note>
            </Slide>
        );
    }
});
