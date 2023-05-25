const { Student, Assignment } = require("../models");

const resolvers = {
  Query: {
    students: async () => {
      return await Student.find({});
    },
    assignments: async () => {
      return await Assignment.find({});
    },
  },

  Mutation: {
    addStudent: async (parent, { firstName, lastName, instrument }) => {
      return await Student.create({ firstName, lastName, instrument });
    },
    addAssignment: async (parent, { name, date, details, userId }) => {
      return await Assignment.create(name, date, details, userId);
    },
  },
};

module.exports = resolvers;
