import { gql } from '@apollo/client';

export const getTransactions = gql`
    query getTransactions {
        getTransactions {
            id
            description
            amount
        }
    }
`;

export const addTransaction = gql`
    mutation addTransaction($description: String!, $amount: Float!) {
        addTransaction(transaction: {
            description: $description
            amount: $amount
        }) {
            id
            description
            amount
        }
    }
`;


export const deleteTransaction = gql`
    mutation deleteTransaction($id: String!) {
        deleteTransaction(id: $id) {
            id
            description
            amount
        }
    }
`;