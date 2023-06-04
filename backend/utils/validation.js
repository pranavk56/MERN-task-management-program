const mongoose = require("mongoose");

const validateObjectId = (string) => {
  return mongoose.Types.ObjectId.isValid(string);
}

module.exports = {
  validateObjectId,
}