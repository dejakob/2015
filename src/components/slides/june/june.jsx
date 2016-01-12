define('June', () => {
    'use strict';

    const SLIDE_NAME = 'June';

    const Slide = use('Slide');
    const SlideContent = use('SlideContent');
    const Facebook = use('Facebook');
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

                    <Facebook url="https://www.facebook.com/dejakob/posts/913958998642854"
                        time="2 June 2015"
                        text="A lot of people ask me what we're actually doing where I work nowadays. To all those people: sit back, relax and watch a vid"
                        youtube="rUZ9eNiATGM"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/photo.php?fbid=918366724868748&set=a.185876698117758.36299.100000862866272&type=3&theater"
                        time="10 June 2015"
                        text="Making Bert Verhelst jealous :)"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/11415599_918366724868748_757770603358896811_o.jpg"
                    ></Facebook>

                    <Tweet status="613994522578563072"
                        text="#lodash, I beated you this time. Come on, give me your best shot!"
                        time="25 June 2015"
                        link="http://t.co/pGlNk3Niaj"
                    ></Tweet>

                    <Facebook url="https://www.facebook.com/photo.php?fbid=926788970693190&set=a.452807001424725.98241.100000862866272&type=3&theater"
                        time="26 June 2015"
                        text="Fancy friday xd"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xlf1/v/t1.0-9/11232014_926788970693190_9105756822964668623_n.jpg?oh=72b6cc743068bf93760c122e0a0e228b&oe=571074CE"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/dejakob/posts/927537360618351"
                        time="28 June 2015"
                        text="My bank is amazing! They are already helping me the entire weekend not wasting my money on unnecessary things like buying food n stuff..."
                    ></Facebook>

                </div>

                <Note>Yeah, also changed my profile pic for this :)</Note>

                <div className="wrapper">

                    <Facebook url="https://www.facebook.com/photo.php?fbid=927650200607067&set=a.145248142180614.16143.100000862866272&type=3&theater"
                        text="&nbsp;"
                        time="28 June 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11206113_927650200607067_2320183483285691805_n.jpg?oh=9813d5988fb0810cd3989bb63d93cb8f&oe=573D5536"
                    ></Facebook>

                </div>
            </Slide>
        );
    }
});
