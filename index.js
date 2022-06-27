const { ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        hello:[String!]
        products: [Product!]!
    }

    type Product {
        name:String!
        Description: String!
        Price: Float!
        Quantity:Int!
        onSale:Boolean!
    }  
`
const resolvers = {
    Query: {
        hello: () => {
            return [" World", "jinn"]
        },
        products: () => {
            return [{
                name:"String!",
                Description: "String!",
                Price: 2.34,
                Quantity:34,
                onSale:true
            }]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,

})

server.listen()
        .then(({url}) => 
            console.log('server is ready at ' + url)
        )