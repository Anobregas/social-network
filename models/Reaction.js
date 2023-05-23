const { Schema, Types } = require('mongoose');
// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    reactionBody: {
      type: String,
      minLength: 0,
      maxLength: 280,
    },
  },
  {
    toJSON: {
      virtuals: false,
    },
    id: true,
  }
);




module.exports = reactionSchema;

