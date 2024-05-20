const router = require('express').Router();
const { Quiz, Choice } = require('../models');

router.get('/project-one', async (req, res) => {
  try {
    const quizData = await Quiz.findAll({
      include: [{ model: Choice }],
    });

    const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));

    res.render('quizPage', { quizzes, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
