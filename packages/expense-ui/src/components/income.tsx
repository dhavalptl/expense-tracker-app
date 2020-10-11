import React, { FC } from 'react'

type IncomeProps = {
    value: string
}

const Income: FC<IncomeProps> = ({value}: IncomeProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex : '1', height: '70px', fontSize: '1.2em'}}>
            <div>
                Income
            </div>
            <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>
                ${value}
            </div>
        </div>
    )
};

export default Income;
