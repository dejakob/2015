define('August', () => {
    'use strict';

    const SLIDE_NAME = 'August';

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

                    <Tweet status="628868983232589824"
                        text="New definition of #yolo: you only load once #perfmatters #angularjs"
                        time="5 Aug 2015"
                    ></Tweet>

                    <Tweet status="629583709818241024"
                        text="Working at @showpad = playing with #lego"
                        image="https://pbs.twimg.com/media/CLy7CpEWIAA7WPl.jpg"
                        time="7 Aug 2015"
                    ></Tweet>

                    <Tweet status="630027079237660672"
                        text="#meanwhileinghent "
                        youtube="avXdkGFonT4"
                        time="8 Aug 2015"
                    ></Tweet>
                </div>

                <Note backgroundColor="#003b94">
                    Hell yeah, I went to #PKP15 and it was fucking epic!
                </Note>

                <div className="wrapper">
                    <Facebook url="https://www.facebook.com/dejakob/posts/952911404747613"
                        time="23 Aug 2015"
                        youtube="UtMOWecObik"
                        text="Nog wat nagenieten van ‪#‎pkp15‬ :)"
                    ></Facebook>
                </div>

                <Note backgroundColor="#003b94">
                    Well, I love the city itself :)
                </Note>

                <div className="wrapper">
                    <Facebook url="https://www.facebook.com/photo.php?fbid=955547021150718&set=a.452807001424725.98241.100000862866272&type=3&theater"
                        time="29 Aug 2015"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11895992_955547021150718_1976980271378433908_n.jpg?oh=2dd69df5a1541e053a7dcdceda9d5f37&oe=57418BD4"
                        text="Yay officially living in Gent"
                    ></Facebook>

                    <Facebook url="https://www.facebook.com/dejakob/posts/955755907796496"
                        time="29 Aug 2015"
                        text="Visiting Wevelgem today. It's so amazing! (yeah I took the wrong train stop...)"
                    ></Facebook>
                </div>
            </Slide>
        );
    }
});
