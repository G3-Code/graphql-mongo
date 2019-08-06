const graphql = require("graphql");
const_ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } = graphql;

//dummy data
var books = [
  { name: "Name of the wind", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "Airport", genre: "Fiction", id: "2", authorId: "2" },
  { name: "Wheels", genre: "Thriller", id: "3", authorId: "3" }
];

var authors = [
  { name: "Patrick Rothfuss", age: 44, id: "1" },
  { name: "Brandon Sanderson", age: 54, id: "2" },
  { name: "Arthur Hailey", age: 49, id: "3" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db
        let result = books.filter(book => {
          return book.id === args.id;
        });

        console.log(result);
        return result[0];
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db
        let result = authors.filter(author => {
          return author.id === args.id;
        });

        console.log(result);
        return result[0];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
