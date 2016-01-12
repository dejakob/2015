define('October', () => {
    'use strict';

    const SLIDE_NAME = 'October';

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
                </div>

                <Note>Yeah, I went to facts!</Note>

                <div className="wrapper">
                    <Facebook url="https://www.facebook.com/photo.php?fbid=10206487367875578&set=a.10204014491095204.1073741830.1011296512&type=3&theater"
                        text="&nbsp;"
                        time="6 Oct 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xat1/t31.0-8/12068414_10206487367875578_4176558375613037532_o.jpg"
                    ></Facebook>

                    <Facebook url="#"
                        text="&nbsp;"
                        time="6 Oct 2015"
                        image="../assets/steffi.jpg"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/dejakob/posts/980128618692558"
                        text="What if we remove timezones?"
                        time="20 Oct 2015"
                    ></Facebook>

                    <Tweet status="657294127407714304"
                        text="Made my own #karma guide for writing painless #angularjs tests: http://dejakob.com/ng-karma/?twitter … #javascript #unittesting #useandimprove"
                        time="22 Oct 2015"
                    ></Tweet>

                    <Facebook url="https://www.facebook.com/photo.php?fbid=983905901648163&set=a.145248142180614.16143.100000862866272&type=3&permPage=1"
                        text="&nbsp;"
                        time="30 Oct 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12193645_983905901648163_6626191630949245211_n.jpg?oh=1f39ec8a87e222e528ab80f4e13b1225&oe=573E5C78"
                    ></Facebook>
                </div>
            </Slide>
        );
    }
});
