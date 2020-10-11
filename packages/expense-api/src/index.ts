import { ApolloServer } from 'apollo-server';
import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";
import * as TransactionModel from './models/transactionModel';

export interface Context {
    transaction: typeof TransactionModel
}

const context: Context = {
    transaction: TransactionModel
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});