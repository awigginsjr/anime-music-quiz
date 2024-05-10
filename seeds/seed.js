const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
=======
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
>>>>>>> e479784e2eaa0e5e1a4eb4807217bca106f5f84b

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
  for (const post of postData) {
    await Post.create({
      ...post,
      userId: users[Math.floor(Math.random() * users.length)].id,
=======
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
>>>>>>> e479784e2eaa0e5e1a4eb4807217bca106f5f84b
    });
  }

  process.exit(0);
};

seedDatabase();
