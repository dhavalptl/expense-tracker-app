import React, { FC } from 'react'
import { Transaction } from '../types/graphql';
import TransactionItem from './transactionItem';

type TransactionsProps = {
    data: Array<Transaction>
}

const Transactions: FC<TransactionsProps> = ({data}: TransactionsProps) => {
    return (
        <>
            <header style={{fontSize: '1.5em'}}>
                Transactions
            </header>
            <ul style={{listStyle: 'none', padding: '5px', margin: '5px', display: 'flex', flexDirection: 'column'}}>
            {data && data.map(transaction => 
                <TransactionItem key={transaction.id} transaction={transaction}/>
            )}
            </ul>
        </>
    )
};

export default Transactions;
