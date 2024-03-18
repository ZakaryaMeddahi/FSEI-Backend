const generator = require('generate-password');

const generatePassword = () => {
  const password = generator.generate({
    length: 10,
    numbers: true,
  });
  return password;
};

module.exports = generatePassword;
