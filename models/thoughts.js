const { Schema, model } = require("mongoose");
const reactionSchema = require("./reactions");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reaction: [reactionSchema],
    },
    {
        toJSON: {
            viirtuals: true,
        },
        id: false,
    }
);

thoughtShcema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;