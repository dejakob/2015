define('FullPreview', () => {
    'use strict';

    const style = {
        display: 'none'
    };
    const content = '';

    return React.createClass({
        displayName: 'FullPreview',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        render,

        hide
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
        fullPreview._setWatcher(setMedia.bind(this));
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {

    }

    function setMedia (media)
    {
        style.backgroundImage = `url(${media})`;
        style.display = 'block';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }

    function hide ()
    {
        style.display = 'none';

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }

    /**
     * Render the component
     */
    function render ()
    {
        // React warning: Warning: `div` was passed a style object that has previously been mutated.
        // Mutating `style` is deprecated. Consider cloning it beforehand.
        const clonedStyle = style.clone();

        return (
            <div className="full-preview" style={clonedStyle} onClick={this.hide}></div>
        );
    }
});
