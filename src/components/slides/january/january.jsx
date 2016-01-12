define('January', () => {
    'use strict';

    const SLIDE_NAME = 'January';

    const Slide = use('Slide');
    const SlideContent = use('SlideContent');

    const Tweet = use('Tweet');
    const CC = use('CC');

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

                    <SlideContent>
                        <Tweet status="560171535689084928"
                            text="Woohoow, trying iOS for the first time"
                            link="http://prntscr.com/5xua76"
                            time="27 Jan 2015"
                            image="../assets/ios.jpg"
                        ></Tweet>

                        <Tweet status="560696649794994176"
                            text="I'm at Station Deinze - @nmbs in Deinze, Oost-Vlaanderen"
                            link="https://www.swarmapp.com/c/1F1svLsfeX6"
                            time="29 Jan 2015"
                        ></Tweet>
                    </SlideContent>
                </div>
                <CC author="Moyan Bren" url="https://www.flickr.com/photos/aigle_dore/9997830314"></CC>
            </Slide>
        );
    }
});
