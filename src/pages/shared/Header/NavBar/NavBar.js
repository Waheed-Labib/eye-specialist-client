import React, { useState } from 'react';
import './NavBar.css'
import greyLogo from '../../../../assets/images/logo/logo.png'
import greenLogo from '../../../../assets/images/logo/green logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [logo, setLogo] = useState('greyLogo')
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='navbar'>
            <div>
                {/* logo */}
                <Link to='/'>
                    <img
                        onMouseOver={() => setLogo('greenLogo')}
                        className={`logo ${logo === 'greenLogo' && 'd-none'}`} src={greyLogo} alt=''></img>
                </Link>

                {/* green logo */}
                <Link to='/'>
                    <img
                        onMouseLeave={() => setLogo('logo')}
                        className={`logo ${logo !== 'greenLogo' && 'd-none'}`} src={greenLogo} alt=''></img>
                </Link>
            </div>

            <div
                onClick={() => setMenuOpen(!menuOpen)}
                className='view-menu'>

                <p className={`${menuOpen && 'd-none'}`}>View Menu</p>
                <p className={`close ${!menuOpen && 'd-none'}`}>Close</p>

                <div className='lines'>
                    <div className={`line ${menuOpen && 'rotate-line rotate-first-line'}`}></div>
                    <div className={`line second-line ${menuOpen && 'rotate-line rotate-second-line'}`}></div>
                </div>

                <div className='navbar-options'>
                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;