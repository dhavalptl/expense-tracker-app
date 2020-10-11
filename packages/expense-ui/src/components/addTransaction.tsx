import React, { FC, useState } from 'react'
import { refetchGetTransactionsQuery, useAddTransactionMutation } from '../types/graphql';

const AddTransaction: FC = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [addTransactionMutation, { error }] = useAddTransactionMutation({
        variables: {
            description,
            amount
        },
        refetchQueries: [refetchGetTransactionsQuery()]
    });
    function clear() {
        setDescription('');
        setAmount(0);
    }
    function addTransaction() {
        addTransactionMutation();
        clear();
    }
    return (
        <div style={{paddingTop: '10px'}}>
            <header style={{fontSize: '1.5em'}}>
                Add Transaction
            </header>
            {error && <div>Error while adding transaction</div>}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{height: '2em', margin: '2px'}}/>
                <input placeholder="Enter Amount" type="number" value={amount === 0 ? '' : amount} onChange={(e) => setAmount(parseFloat(e.target.value))} maxLength={7} minLength={1} style={{height: '2em', margin: '2px'}}/>
                <div style={{height: '2em'}}>
                    <button type="submit" style={{height: '2em', margin: '2px'}} onClick={addTransaction}>Add Transaction</button>
                    <button style={{height: '2em', margin: '2px'}} onClick={clear}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default AddTransaction;
