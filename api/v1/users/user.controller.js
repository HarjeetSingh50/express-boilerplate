module.exports = {
  list: async (req, res) => {
    try {
      res.send('respond with a resource');
    } catch (e) {
      res.sendRes(null, e.message, true);
    }
  },

};
