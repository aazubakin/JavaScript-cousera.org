module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (this[event] === undefined) {
            this[event] = [];
        }
        //console.log(this[event]);
        this[event].push({ subscriber: subscriber, handler: handler });
        //console.log(this[event][0].subscriber);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this[event] !== undefined) {
            this[event] = this[event].filter(element => element.subscriber != subscriber);
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this[event] !== undefined) {
            for (var i = 0; i < this[event].length; i++) {
                this[event][i].handler.call(this[event][i].subscriber);
            }
        }

        return this;
    }
};

//module.exports.on('event', 'subscriber', 'handler');