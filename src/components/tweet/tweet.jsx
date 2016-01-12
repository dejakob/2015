define('Tweet', () => {
    'use strict';

    let previewHeight = '10px';

    return React.createClass({
        displayName: 'Tweet',
        getInitialState,
        componentDidMount,
        componentWillUnmount,
        render,

        showPreview
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
    }

    /**
     * When the component will unmount
     */
    function componentWillUnmount ()
    {
        Resizer.clearWatcher(onWindowResize.bind(this));
    }

    function showPreview ()
    {
        fullPreview(this.props.image);
    }

    /**
     * Render the component
     */
    function render ()
    {
        let url = `https://twitter.com/dejakob/status/${this.props.status}`;
        let bgImageStyle = {
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${this.props.image})`,
            height: previewHeight
        };
        let style = this.props.style;
        let preview = '';

        if (this.props.image) {
            preview = <div className="item-image" style={bgImageStyle} onClick={this.showPreview}></div>;
        }

        if (this.props.youtube) {
            const ytUrl = `https://www.youtube.com/embed/${this.props.youtube}`;
            const ytStyle = {
                border: 'none',
                height: previewHeight,
                width: '100%'
            };

            preview = <div className="item-image">
                <iframe width="100%" style={ytStyle} src={ytUrl} frameborder="0" allowfullscreen></iframe>
            </div>;
        }

        return (
            <div className="item tweet" style={style}>
                {preview}
                <div className="item-description">
                    <a href={url} title="Open tweet" target="_blank"><i className="fa fa-twitter"></i></a>
                    <p>{this.props.text}</p>
                    <p className="small">{this.props.time}</p>
                </div>
            </div>
        );
    }

    function onWindowResize (size)
    {
        previewHeight = `${size.height - 300}px`;

        if (this.isMounted()) {
            this.updater.enqueueForceUpdate(this);
        }
    }
});
