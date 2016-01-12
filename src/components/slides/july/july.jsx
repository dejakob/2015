define('July', () => {
    'use strict';

    const SLIDE_NAME = 'July';

    const Slide = use('Slide');
    const SlideContent = use('SlideContent');
    const Facebook = use('Facebook');
    const Tweet = use('Tweet');

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

                    <Tweet status="618163921350995968"
                        text="#woohoow Creating my first #gulp #npm module: gulp-mobile-first"
                        link="https://t.co/S77Fv3g6JO"
                        time="6 July 2015"
                    ></Tweet>

                    <Tweet status="621798232545476609"
                        text="I hereby declare that I will never ever forget flushing $httpBackend ever again... #karma #AngularJS #wastedTooMuchTime"
                        time="16 July 2015"
                    ></Tweet>

                    <Tweet status="622165245688184832"
                        text="They did a great job #gentsefeesten #meanwhileinghent"
                        time="17 July 2015"
                        image="https://pbs.twimg.com/media/CKJf_NYUMAAgE_Q.jpg"
                    ></Tweet>

                    <Tweet status="624270912653819904"
                        text="Vip biatch #gentsefeesten"
                        time="23 July 2015"
                        image="https://pbs.twimg.com/media/CKnbFIGWsAAxLKq.jpg"
                    ></Tweet>

                    <Tweet status="625033042294362112"
                        text="As a guy, you never know how happy you are until you have to pee @ #gentsefeesten #wishyouluck ladies #polepole"
                        time="25 July 2015"
                    ></Tweet>

                    <Tweet status="627131197638971392"
                        text="Undefined is not a function it said... #JS #JavaScript"
                        time="31 July 2015"
                        image="http://i.imgur.com/nTYx68p.png"
                    ></Tweet>
                </div>
            </Slide>
        );
    }
});
