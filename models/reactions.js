const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: () => new Types.ObjectId(),
    },
    rectionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
Username: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
},
});

module.exports = reactionSchema;