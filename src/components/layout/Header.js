import React from 'react';

function Header() {

    return (
        <header style={headerStyle}>
            <h2>TodoList</h2>
        </header>
    );
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header