const { Schema, model } = require("mongoose");

const assignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  userId: {
    type: ID,
    required: true,
  },
});

const Assignment = model("Assignment", assignmentSchema);

module.exports = Assignment;
