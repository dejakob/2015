define('Square', function () {
    'use strict';

    const style = {
        transform: 'rotate(45deg)',
        position: 'absolute',
        background: 'rgba(255, 255, 255, 0.2)',
        bottom: '-51px',
        right: '-51px'
    };

    return React.createClass({
        displayName         : 'Square',
        getInitialState,
        render
    });

    function getInitialState() {
        return {};
    }

    function render() {
        let size = Number(this.props.size) || 100;
        let borderWidth = Number(this.props.border) || 1;

        style.height = style.width = `${size}px`;
        style.bottom = style.right = `-${size / 2 + borderWidth}px`;
        style.border = `${borderWidth}px #fff solid`;

        return (
            <div style={style}></div>
        );
    }
});