const { User } = require('../db/models');

const getUser = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findByPk(Number(req.session.userId), { raw: true });
    res.locals.user = { name: user.name, id: user.id };
  }
  next();
};

const resLocals = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
  }
  next();
};
module.exports = {
  resLocals,
  getUser,
};
