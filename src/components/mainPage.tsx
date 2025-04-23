import React from 'react';

const MainPage: React.FC = () => {
    const clickOnCell = (e:React.MouseEvent<HTMLTableCellElement>):void => {
        console.log(e.currentTarget.textContent)
        e.currentTarget.textContent = 'x'
    }

    return (
        <div className='table'>
            <h1 className='header'>Крестики-нолики</h1>
            <table>
                <tbody>
                <tr>
                    <td onClick={clickOnCell}>0</td>
                    <td onClick={clickOnCell}>1</td>
                    <td onClick={clickOnCell}>2</td>
                </tr>
                <tr>
                    <td onClick={clickOnCell}>3</td>
                    <td onClick={clickOnCell}>4</td>
                    <td onClick={clickOnCell}>5</td>
                </tr>
                <tr>
                    <td onClick={clickOnCell}>6</td>
                    <td onClick={clickOnCell}>7</td>
                    <td onClick={clickOnCell}>8</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MainPage;