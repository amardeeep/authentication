const homeController = async (req, res) => {
  res.render("home");
};
const getlogin = async (req, res) => {
  res.render("login");
};
const getsignup = async (req, res) => {
  res.render("sign-up");
};
const postlogin = async (req, res) => {};
const postsignup = async (req, res) => {};
module.exports = {
  homeController,
  getlogin,
  getsignup,
  postlogin,
  postsignup,
};
