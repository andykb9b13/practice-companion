const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Student {
    _id: ID
    name: String
    instrument: String
    assignments: [Assignment]
  }

  type Assignment {
    _id: ID
    name: String
    date: String
    details: String
    userId: ID
  }

  type Query {
    students: [Student]
    assignments: [Assignment]
  }

  type Mutation {
    addStudent(name: String!, instrument: String!): Student
    addAssignment(
      name: String!
      date: String!
      details: String!
      userId: ID
    ): Assignment
  }
`;

module.exports = typeDefs;
