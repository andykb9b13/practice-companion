const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  assignments: {
    type: String,
  },
});

const Student = model("Student", studentSchema);

module.exports = Student;
