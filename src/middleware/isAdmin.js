module.exports = (req, res, next) => {
  console.log(req.user,' is');
  
  if (req.user.role === 'admin') {
    next();
  } else {
    next(new Error("Недостаточно прав."));
  }
};
