define('April', () => {
    'use strict';

    const SLIDE_NAME = 'April';

    const Slide = use('Slide');
    const Note = use('Note');
    const Tweet = use('Tweet');
    const Facebook = use('Facebook');
    const SlideContent = use('SlideContent');

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
                </div>

                <Note backgroundColor="#E4A000">
                    <i className="fa fa-plane"></i>&nbsp;
                    Woohoow! Trip to San Francisco!&nbsp;
                    <i className="fa fa-plane"></i>
                    <i className="fa fa-plane"></i>
                    <i className="fa fa-plane"></i>
                </Note>

                <div className="wrapper">
                    <Tweet status="585686865283547136"
                        text="I'm at Brussels Airport (BRU) in Zaventem, Vlaams-Brabant"
                        time="8 Apr 2015"
                        link="https://t.co/Wtz6zsJ4dJ"
                        image="../assets/airplane.jpg"
                    ></Tweet>

                    <Tweet status="586240752252035072"
                        text="I'm at Pier 35 in San Francisco, CA"
                        time="9 Apr 2015"
                        link="https://t.co/M8Roz23MuX"
                        image="../assets/pier.jpg"
                    ></Tweet>

                    <Tweet status="586526160986714112"
                        text="I'm at Hostelling International - @hiusaggc in San Francisco, CA"
                        time="10 Apr 2015"
                        link="https://t.co/4oUFUt5DHJ"
                        image="../assets/hostel.jpg"
                    ></Tweet>

                    <Tweet status="586552218670751746"
                        text="I'm at Golden Gate Bridge - @ggbridge in San Francisco, CA"
                        time="10 Apr 2015"
                        link="https://t.co/O3ijUVoIBv"
                        image="../assets/bridge.jpg"
                    ></Tweet>

                    <Tweet status="586572983814225922"
                        text="I'm at VMware, Inc. in Palo Alto, CA"
                        time="10 Apr 2015"
                        link="https://t.co/SFnWVooJlJ"
                        image="../assets/vmware.jpg"
                    ></Tweet>

                    <Tweet status="586980268193353728"
                        text="I'm at Santa Cruz in Santa Cruz, CA"
                        time="11 Apr 2015"
                        link="https://t.co/xLt08nRWmY"
                        image="../assets/santaCruz.jpg"
                    ></Tweet>

                    <Facebook source="facebook"
                        url="https://www.facebook.com/photo.php?fbid=888847051154049&set=a.452807001424725.98241.100000862866272&type=3&theater"
                        image="https://scontent-bru2-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/s2048x2048/10887132_888847051154049_8060911923990607891_o.jpg"
                        time="12 Apr 2015"
                        text="&nbsp;"
                    ></Facebook>

                    <Tweet status="588012209311186945"
                        text="I'm at Googleplex - @google in Mountain View, CA w/ @jokevangheluwe @jessjoanna"
                        time="14 Apr 2015"
                        link="https://t.co/tLbWsQKywX"
                        image="../assets/google.jpg"
                    ></Tweet>

                    <Tweet status="588369972935667713"
                        text="I'm at @GitHub HQ 3.0 in San Francisco, CA w/ @jokevangheluwe @jessjoanna @solvesoul @sandrien_l"
                        time="15 Apr 2015"
                        link="https://t.co/FunpyIdSyT"
                        image="../assets/github.jpg"
                    ></Tweet>

                    <Tweet status="588185024421216256"
                        text="Paul Irish: @dejakob nice work. :)"
                        time="14 Apr 2015"
                        link="https://twitter.com/paul_irish/status/588185024421216256"
                    ></Tweet>

                    <Tweet status="588183213396246528"
                        text="Colt McAnlis: @dejakob +10 points for knowing about pagespeed."
                        time="15 Apr 2015"
                        link="https://twitter.com/duhroach/status/588183213396246528"
                    ></Tweet>

                    <Tweet status="588398836781056000"
                        text="I'm at Zynga in San Francisco, CA"
                        time="15 Apr 2015"
                        link="https://t.co/yGVSu1AF0I"
                        image="../assets/zynga.jpg"
                    ></Tweet>
                </div>

                <Note backgroundColor="#E4A000">
                    Getting <i className="fa fa-fire-extinguisher"></i> at Massvive&#47;&#47;Media
                </Note>

                <Note backgroundColor="#E4A000">
                    Job hunt ... Luckily I met this lil' startup in San Francisco ...
                </Note>

                <div className="wrapper">

                    <img src="../assets/showpad.png" className="showpad-logo" height="200px" alt="Showpad logo" />
                </div>
            </Slide>
        );
    }
});
