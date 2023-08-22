import React from 'react';
import Search from '../../features/search/Search';
import './header.css';

function Header() {
    return (
        <header>
            <h1>Reddit<span id="minimal">Minimal</span></h1>
            <Search/>
        </header>
    )
}

export default Header