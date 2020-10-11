import React, { FC } from 'react';
import { Transaction, useDeleteTransactionMutation, refetchGetTransactionsQuery } from '../types/graphql';

type TransactionProps = {
    transaction: Transaction
}

const TransactionItem: FC<TransactionProps> = ({transaction}: TransactionProps) => {
    const [ deleteTransactionMutation ] = useDeleteTransactionMutation({
        variables: {
            id: transaction.id,
        },
        refetchQueries: [refetchGetTransactionsQuery()]
    });
    function deleteTransaction() {
        deleteTransactionMutation();
    }
    return (
        <li style={{flex: '1', display: 'flex', flexDirection: 'row', margin: '1px'}}>
            <div style={{flex: '1'}}>
                {transaction.description}
            </div>
            <div style={{textAlign: 'right', color: `${transaction.amount < 0 ? 'red': 'black'}`}}>
                ${Math.abs(transaction.amount)}
            </div>
            <button style={{textAlign: 'right', paddingLeft: '10px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}} onClick={deleteTransaction}>
                &#10005;
            </button>
        </li>
    )
}

export default TransactionItem;
