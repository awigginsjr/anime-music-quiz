const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.isLoggedIn = true;

      res.status(307).redirect('/');
    });
  } catch (err) {
    res.status(307).redirect('/signup?error=' + err.toString());
  }
});

router.post('/login', async (req, res) => {

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData)
    {
      return res.status(307).redirect('/login?error=Incorrect email or password, please try again.');
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(307).redirect('/login?error=Incorrect email or password, please try again.');
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.isLoggedIn = true;
      
      res.status(307).redirect('/');
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      res.status(307).redirect('/login');
    });
  } else {
    res.status(307).redirect('/login');
  }
});

module.exports = router;
