define('September', () => {
    'use strict';

    const SLIDE_NAME = 'September';

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
        const ad = `
        <!-- 2015 -->
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5488735990396666"
             data-ad-slot="9656993371"
             data-ad-format="auto"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        `;

        this.getDOMNode().innerHTML += ad;
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

                    <Facebook url="https://www.facebook.com/dejakob/posts/961441803894573"
                        text="Jakob Kerkhove shared Mario Haneca's photo."
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/11168916_937283462995769_6496683731828897752_o.jpg"
                        time="9 Sep 2015"
                    ></Facebook>

                    <Tweet status="644611951360917505"
                        text="Who's going to @ATC_BAND next week in Antwerp? #ATC"
                        time="17 Sep 2015"
                    ></Tweet>

                    <Facebook url="https://www.facebook.com/dejakob/posts/961441803894573"
                        text="&nbsp;"
                        image="https://scontent-ams3-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/11168916_937283462995769_6496683731828897752_o.jpg"
                        time="23 Sep 2015"
                        youtube="y-MaaxgdUT4"
                    ></Facebook>

                    <Tweet status="648578265318297600"
                        text="https://ulule.com/quizwitz everyone should support these guys. They're awesome!"
                        time="28 Sep 2015"
                        link="https://ulule.com/quizwitz"
                    ></Tweet>
                </div>
            </Slide>
        );
    }
});
