import React, { FC } from 'react'

type BalanceProps = {
    value: string
}

const Balance:FC<BalanceProps> = ({value}: BalanceProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex : '1', height: '70px', fontSize: '1.2em'}}>
            <div>
                Balance
            </div>
            <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>
                ${value}
            </div>
        </div>
    )
};

export default Balance;
