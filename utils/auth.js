<<<<<<< HEAD
const withGuard = (req, res, next) => {
=======
const withAuth = (req, res, next) => {
>>>>>>> e479784e2eaa0e5e1a4eb4807217bca106f5f84b
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
<<<<<<< HEAD
  const apiGuard = (req, res, next) => {
    if (!req.session.logged_in) {
      res.status(403).json({ msg: 'You must login or create a page' });
    } else {
      next();
    }
  };
  
  const withoutGuard = (req, res, next) => {
    if (!req.session.logged_in) {
      next();
    } else {
      res.redirect('/');
    }
  };
  
  module.exports = { withGuard, apiGuard, withoutGuard };
=======
  module.exports = withAuth;
>>>>>>> e479784e2eaa0e5e1a4eb4807217bca106f5f84b
  