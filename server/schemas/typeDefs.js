const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  type Book {
    bookdId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!,password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
  }
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
`;



module.exports = typeDefs;