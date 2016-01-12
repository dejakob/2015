define('November', () => {
    'use strict';

    const SLIDE_NAME = 'November';

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

                    <Facebook url="https://www.facebook.com/photo.php?fbid=986409311397822&set=a.452807001424725.98241.100000862866272&type=3&theater"
                        text="Den Jakez gaat ook ne keer uitgaan...."
                        time="5 Nov 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/12196002_986409311397822_1719574698457935365_n.jpg?oh=ac8824616827dd1a53f8c30ba955fe8e&oe=56FFFD57"
                    ></Facebook>

                    <Facebook text="Come on, super cool fancy tech event in Ghent, limited spots..."
                        url="https://www.facebook.com/dejakob/posts/991695564202530"
                        time="18 Nov 2015"
                        image="../assets/gears.jpg"
                    ></Facebook>

                    <Tweet status="669559018432630784"
                        text="I gotta say, since #ES2015 I love using the ` key #javascript"
                        time="25 Nov 2015"
                    ></Tweet>
                </div>
            </Slide>
        );
    }
});
