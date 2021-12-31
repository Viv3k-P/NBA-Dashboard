import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="main-bar">
                <div className="logo">
                    <h4>ScoreboardX</h4>
                </div>

                {/* <div className="menu-link"> */}
                    <ul>
                        <li onClick={() => console.log("clicked!")}>
                            <a href='#'>Home</a>
                        </li>

                        <li>
                            <a href='#'>Scores</a>
                        </li>
                        <li>
                            <a href='#'>Dashboard</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                    </ul>
                {/* </div> */}
            </nav>
        
        </>
    )
}

export default Navbar