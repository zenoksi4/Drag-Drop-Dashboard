const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    listTitle: {
        type: String,
        required: true
    },

    cards: [{
            title: String,
            date: { type: Date, default: Date.now }
        }]
});

module.exports = mongoose.model("list", listSchema)