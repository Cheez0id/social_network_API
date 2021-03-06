const { text } = require('express');
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// **Schema Settings**:
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      default: false,
      match: `/^.{1,280}$/`
    },
    createdAt: {
      type: Date,
      default: Date.now,
//TODO:  * Use a getter method to format the timestamp on query
//review? https://stackoverflow.com/questions/70724966/how-to-use-getter-or-setter-with-mongoose-timestamps
    },
    username: {
      type: String,
      required: true,
    },
//  * Array of nested documents created with the `reactionSchema` -- recursion?
reactions: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Reaction',
  },
],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactions` that gets the amount of reactions per video
thoughtSchema
  .virtual('reactionCout')
    .get(function () {
      const getReactions=this.reponse.length;
    return getReactions;
  });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
