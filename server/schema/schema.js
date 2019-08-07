const graphql = require("graphql");
const_ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // let result = authors.filter(author => {
        //   return author.id === parent.authorId;
        // });
        // return result[0];
        // Add code to retrieve from MongoDB
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // let result = books.filter(book => {
        //   return book.authorId === parent.id;
        // });
        // return result;
        // Add code to retrieve from Mongo DB
      }
    }
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
        // let result = books.filter(book => {
        //   return book.id === args.id;
        // });
        // return result[0];
        // Add code to retrieve from Mongo DB
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db
        // let result = authors.filter(author => {
        //   return author.id === args.id;
        // });
        // console.log(result);
        // return result[0];
        // Add code to retrieve from Mongo DB
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return books;
        // code from Mongo DB
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        //return authors;
        // code to retrieve data from Mongo DB
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
