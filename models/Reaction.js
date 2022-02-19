const { Schema, Types } = require('mongoose');
//**Schema Settings**:
// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

const reactionSchema = new Schema(
// reference code from 18/24
    {
// Uses mongoose's object ID data type and the default value is set to a new Object Id      
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
// TODO:* *use a 'getter method' to format the timestap on query?
//review? https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
