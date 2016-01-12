define('LinkGame', () => {
    'use strict';

    let gameHeight = 0;
    let gameWidth = 0;
    const buttonWidth = 200;
    const buttonHeight = 30;

    const style = {
        width: '100%',
        margin: '20px 0'
    };
    const buttonStyle = {};
    const holder = {
        height: '100%',
        width: '100%'
    };

    return React.createClass({
        displayName: 'LinkGame',
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
        Resizer.addWatcher(onWindowResize.bind(this));
        onMouseMove.call(this);
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    /**
     * @param {Object} size
     */
    function onWindowResize (size)
    {
        gameHeight = size.height / 2;
        gameWidth = React.findDOMNode(this).clientWidth;
        style.height = `${size.height / 2}px`;

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function onMouseMove ()
    {
        const randomTop = parseInt(Math.random() * (gameHeight / 2 - 30) + 60);
        const randomLeft = parseInt(Math.random() * (gameWidth - 350) + 60);

        buttonStyle.left = `${randomLeft}px`;
        buttonStyle.top = `${randomTop}px`;

        if (this.isMounted()) {
            this.forceUpdate();
        }
    }

    function openLink ()
    {
        window.location.href = this.props.link;
    }

    /**
     * Render the component
     */
    function render ()
    {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        const clonedStyle = style.clone();
        const clonedButtonStyle = buttonStyle.clone();
        const clonedHolderStyle = holder.clone();

        return (
            <div className="link-game" style={clonedStyle} onMouseMove={onMouseMove.bind(this)}>
                <div className="holder" style={clonedHolderStyle}></div>
                <button style={clonedButtonStyle} onClick={openLink.bind(this)}>
                    <i className="fa fa-download"></i> {this.props.text}
                </button>
            </div>
        );
    }
});
