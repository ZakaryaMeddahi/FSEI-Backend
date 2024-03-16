const register = (req, res) => {
  try {
    const {body} = req;
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

const login = (req, res) => {

}

module.exports = {
  register,
  login
};