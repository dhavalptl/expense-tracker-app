import { Transaction } from "../types/graphql";

type ExpenseDetailsReturn = {
    getBalance: () => string,
    getIncome: () => string,
    getExpense: () => string,
}

export function useExpenseDetails(transactions: Array<Transaction>): ExpenseDetailsReturn {
    function getBalance(): string {
        if(transactions) {
            return transactions.reduce((acc: number, item: Transaction) => (acc += item.amount), 0).toFixed(2);
        }
        return '0.00';
    }
    function getIncome(): string {
        if(transactions) {
            return transactions
            .filter((item: Transaction) => item.amount > 0)
            .reduce((acc: number, item: Transaction) => (acc += item.amount), 0).toFixed(2);
        }
        return '0.00';
    }
    function getExpense(): string {
        if(transactions) {
            return Math.abs(transactions
            .filter((item: Transaction) => item.amount < 0)
            .reduce((acc: number, item: Transaction) => (acc += item.amount), 0)).toFixed(2);

        }
        return '0.00';
    }
    return {
        getBalance,
        getIncome,
        getExpense
    }
}