import { Transaction } from "../generated/graphql";

const transactions: Array<Transaction> = [];

export function getAllTransactions(): Array<Transaction> {
    return transactions;
}

export function addNewTransaction(transaction: Transaction): void {
    transactions.push(transaction);
}

export function deleteTransaction(id: string): Transaction | null {
    const transactionIndex = transactions.findIndex((transaction: Transaction) => transaction.id === id);
    if(transactionIndex !== -1) {
        const transactionToDelete = {...transactions[transactionIndex]};
        transactions.splice(transactionIndex, 1);
        return transactionToDelete;
    }
    return null;
}