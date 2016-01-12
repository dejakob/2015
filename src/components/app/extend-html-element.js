HTMLElement.prototype.offset = offset;

/**
 * @source https://jsperf.com/test-offset-jquery-vs-vanilla
 * @returns {{top: number, left: number}}
 */
function offset() {
    var rect = this.getBoundingClientRect(), bodyElt = document.body;

    return {
        top: rect.top + bodyElt .scrollTop,
        left: rect.left + bodyElt .scrollLeft
    }
}