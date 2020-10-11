import React, { FC } from 'react'

type ExpenseProps = {
    value: string
}

const Expense: FC<ExpenseProps> = ({value}: ExpenseProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex : '1', height: '70px', fontSize: '1.2em'}}>
            <div>
                Expense
            </div>
            <div style={{fontSize: '1.2em', fontWeight: 'bold', color: 'red'}}>
                ${value}
            </div>
        </div>
    )
};

export default Expense;
