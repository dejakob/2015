define('December', () => {
    'use strict';

    const SLIDE_NAME = 'December';

    const Slide = use('Slide');
    const Note = use('Note');
    const Tweet = use('Tweet');
    const Facebook = use('Facebook');

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

                    <Tweet status="673562269339414528"
                        text="I just reinvented #alert with #reactjs Check it out here: http://geoow.github.io/geoow-alert/ #javascript"
                        time="6 Dec 2015"
                    ></Tweet>

                    <Facebook url="https://www.facebook.com/dejakob/posts/1000040136701406"
                        text="Jakob Kerkhove checked in to Barcelona–El Prat Airport."
                        time="8 Dec 2015"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/dejakob/posts/1001540419884711"
                        text="Skate paradise..."
                        time="11 Dec 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/12374932_1001540069884746_4765478037174788480_o.jpg"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/photo.php?fbid=1008422225863197&set=a.452807001424725.98241.100000862866272&type=3&theater"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/5863_1008422225863197_6318219986736660609_n.jpg?oh=72d78d9ee9438e25cd22640171f4d0f9&oe=57442D14"
                        text="Kerstavond op deze plaats, het is eens wat anders"
                        time="24 Dec 2015"
                    ></Facebook>

                </div>
            </Slide>
        );
    }
});
