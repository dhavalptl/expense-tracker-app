import { Resolvers, Transaction } from "../generated/graphql";

export const resolvers: Resolvers = {
    Query: {
        getTransactions: (root, args, context) => {
            return context.transaction.getAllTransactions();
        }
    },
    Mutation: {
        addTransaction: (root, args, context) => {
            const newTransaction = {...args.transaction, id: `${Date.now()}`} as Transaction
            context.transaction.addNewTransaction(newTransaction);
            return newTransaction;
        },
        deleteTransaction: (root, args, context) => {
            return context.transaction.deleteTransaction(args.id);
        }
    }
};