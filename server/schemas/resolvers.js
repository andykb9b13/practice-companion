const { Student, Assignment } = require("../models");

const resolvers = {
  Query: {
    students: async () => {
      return await Student.find({}).populate("assignments");
    },
    assignments: async () => {
      return await Assignment.find({});
    },
  },

  Mutation: {
    addStudent: async (parent, { name, instrument }) => {
      return await Student.create({ name, instrument });
    },
    addAssignment: async (parent, { name, date, details, userId }) => {
      return await Assignment.create(name, date, details, userId);
    },
  },
};

module.exports = resolvers;
