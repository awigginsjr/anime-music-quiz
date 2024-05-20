// // Comment model definition
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//   {
//     // ... your fields here ...
//   },
//   {
//     sequelize,
//     modelName: 'comment',
//     // ... other model options ...
//   }
// );

// module.exports = Comment;

// // Route to handle comment submission
// app.post('/submit-comment', async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       name: req.body.name, // Assuming you have a 'name' field in your form
//       description: req.body.comment, // The text of the comment
//       // ... other fields ...
//     });
//     // Redirect or send a response here after successful insertion
//   } catch (error) {
//     // Handle errors here
//   }
// });
