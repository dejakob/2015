define('Quotes', () => {
    'use strict';

    const SLIDE_NAME = 'Quotes';
    const QUOTES = [
        { content: 'You can not rely on unit tests if your unit tests are not reliable', author: 'Klaas Cuvelier' },
        { content: 'The internet is full of shit', author: 'Colt McAnlis' },
        { content: 'Just chill man', author: 'Mike Warner' },
        { content: 'you\'re gonna go far kid', author: 'Ivan Stoilov' },
        { content: 'Gaat alleen maar verbeteren peisk', author: 'Peter-Jan Brone' },
        { content: 'Ik geloof echt dat je goed bezig bent', author: 'Jan Deschuttere' },
        { content: 'Nothing is ever perfect', author: 'Jakub Slocki' },
        { content: 'Maarten is checking out the slaves', author: 'Louis Van de Calseyde' },
        { content: 'PRUTS ALL THE THINGS', author: 'Jelle Nagels' }
    ];

    const Slide = use('Slide');

    let quote = QUOTES[0];
    let timeout = null;

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
        changeQuote.call(this);
    }

    function changeQuote ()
    {
        const index = parseInt(Math.random() * QUOTES.length);

        quote = QUOTES[index];
        timeout = setTimeout(changeQuote.bind(this), 4000);
        this.forceUpdate();
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {
        try {
            clearTimeout(timeout);
        } catch (ex) {}
    }

    /**
     * Render the component
     */
    function render ()
    {
        return (
            <Slide name={SLIDE_NAME}>
                <div className="wrapper quotes">
                    <h1>Quotes of 2015</h1>
                    <div className="quote">
                        <span className="quote-open"><i className="fa fa-quote-left"></i></span>
                        <span className="content">{quote.content}</span>
                        <span className="quote-close"><i className="fa fa-quote-right"></i></span>

                        <span className="author">{quote.author}</span>
                    </div>
                </div>
            </Slide>

        );
    }
});
