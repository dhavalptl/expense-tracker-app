import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Transaction {
        id: ID!
        description: String!
        amount: Float!
    }
    input TransactionInput {
        description: String!
        amount: Float!
    }
    type Query {
        getTransactions: [Transaction!]!
    }
    type Mutation {
        addTransaction(transaction: TransactionInput): Transaction!
        deleteTransaction(id: String!): Transaction!
    }
`;