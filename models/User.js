const { Schema, model } = require('mongoose');
const User = require('./Reaction');

// **Schema Settings**:
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// Schema to create Post model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim:true,
      unique:true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
       match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, `please add a valid e-mail address`]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    // thoughts: [Thought],
    // friends: [User],
  },
);

userSchema
  .virtual('friendCount')
    .get(function () {
      const getFriends = this.friends.length;
    return getFriends;
  });


const User = model('user', userSchema);

module.exports = User;
