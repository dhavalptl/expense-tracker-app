import React from 'react';
import AddTransaction from './components/addTransaction';
import Balance from './components/balance';
import Expense from './components/expense';
import Income from './components/income';
import Transactions from './components/transactions';
import { useExpenseDetails } from './components/useExpenseDetails';
import { useGetTransactionsQuery } from './types/graphql';

const App: React.FC = () => {
    const { loading, error, data } = useGetTransactionsQuery();
    const { getBalance, getExpense, getIncome } = useExpenseDetails(data && data.getTransactions ? data.getTransactions : []);
    if(error) {
        return <div>Error while loading trasactions</div>
    }
    if(loading) {
        return <div>Loading.....</div>
    }
    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', maxWidth: '400px', fontSize: '1em', fontFamily: `Arial, Helvetica, sans-serif`}}>
            <header>
                <h2>Expense Tracker</h2>
            </header>
            <main>
                {data && data.getTransactions && (
                    <>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Balance value={getBalance()}/>
                            <Income value={getIncome()}/>
                            <Expense value={getExpense()}/>
                        </div>
                        <Transactions data={data.getTransactions}/>
                        <AddTransaction />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;