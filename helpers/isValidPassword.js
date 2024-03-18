const bcrypt = require('bcryptjs');

const isValidPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = isValidPassword;