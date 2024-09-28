import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Header.css"

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <h1>My Page</h1>
                    <div className='avatar'>
                        <Avatar style={{ background: "blue" }}>H</Avatar>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header