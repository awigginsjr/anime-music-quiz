const Quiz = require('./quiz');
const Choice = require('./choice');

// Define associations
Quiz.hasMany(Choice, {
  foreignKey: 'quizId',
  onDelete: 'CASCADE',
});

Choice.belongsTo(Quiz, {
  foreignKey: 'quizId',
});

module.exports = {
  Quiz,
  Choice,
};
const User = require('./User');

// const Comment = require('./Comment');

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User };


