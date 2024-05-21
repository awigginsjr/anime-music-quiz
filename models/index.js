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

module.exports = { User };


