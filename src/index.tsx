import React from 'react';
import ReactDOM from 'react-dom';

import '../style.css';
import MainPage from './components/mainPage';

ReactDOM.render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode>,
    document.getElementById('app')
);