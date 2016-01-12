define('May', () => {
    'use strict';

    const SLIDE_NAME = 'May';

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

                    <Tweet status="596409233563918337"
                        text="I'm at Cantina Cubana 2015"
                        time="7 May 2015"
                        link="https://t.co/PAehFZqwId"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/10169463_10206277930816901_8700911147555837726_n.jpg?oh=0da51305f3383ce4d4530ad3a96f9c36&oe=573E6C80"
                    ></Tweet>

                    <Facebook source="facebook"
                        url="https://www.facebook.com/dejakob/posts/903933869645367"
                        time="11 May 2015"
                        text="Since it's official, I can share it on Facebook.
                        Next week I'll be part of the Showpad team! ‪#‎woohoow‬!"
                    ></Facebook>

                    <Facebook source="facebook"
                        url="https://www.facebook.com/100000862866272/posts/906380172734070/"
                        time="17 May 2015"
                        text="Skated 30km"
                    ></Facebook>

                    <Facebook source="facebook"
                        url="https://www.facebook.com/dejakob/posts/907272009311553"
                        time="19 May 2015"
                        text="One of my favourites :)"
                        youtube="PvVhUo-PvVI"
                    ></Facebook>

                    <Facebook source="facebook"
                        url="https://www.facebook.com/dejakob/posts/911235305581890"
                        time="29 May 2015"
                        text="I feel the pain bro :)"
                        youtube="vTTzwJsHpU8"
                    ></Facebook>
                </div>
            </Slide>
        );
    }
});
