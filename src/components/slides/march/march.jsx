define('March', () => {
    'use strict';

    const SLIDE_NAME = 'March';

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
                    <SlideContent>
                        <Facebook source="facebook"
                            url="https://www.facebook.com/photo.php?fbid=877308438974577&set=a.452807001424725.98241.100000862866272&type=3"
                            image="https://scontent-ams2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10998018_877308438974577_6882755184111889666_n.jpg?oh=4640f05bf6ae01b96fe501fbda011315&oe=57497669"
                            time="20 March 2015"
                            text="Jakez official fan club (R)"
                        ></Facebook>
                        <Tweet status="581034315460415490"
                            text="I'm 97% rockstar! How much of a rockstar are you?"
                            time="26 March 2015"
                            link="http://t.co/Uh95XNlDcm"></Tweet>
                    </SlideContent>
                </div>
            </Slide>
        );
    }
});
