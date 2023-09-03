import React, { useContext, useState } from 'react';
import './NavBar.css'
import greyLogo from '../../../../assets/images/logo/logo.png'
import greenLogo from '../../../../assets/images/logo/green logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { FaBookOpen, FaHome, FaNotesMedical, FaPencilAlt, FaRegListAlt, FaSignOutAlt, FaStar, FaUser } from 'react-icons/fa';

const NavBar = () => {

    const [logo, setLogo] = useState('greyLogo')
    const [menuOpen, setMenuOpen] = useState(false)

    const { user } = useContext(AuthContext)

    return (
        <div className='navbar'>
            <div className={`${menuOpen && 'hide-logo-section'}`}>
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

            <div className='menu'>

                <div onClick={() => setMenuOpen(!menuOpen)} className='view-menu'>
                    <p className={`view-menu-text ${menuOpen && 'd-none'}`}>View Menu</p>
                    <p className={`view-menu-text close ${!menuOpen && 'd-none'}`}>Close</p>

                    <div className='lines'>
                        <div className={`line ${menuOpen && 'rotate-line rotate-first-line'}`}></div>
                        <div className={`line second-line ${menuOpen && 'rotate-line rotate-second-line'}`}></div>
                    </div>
                </div>


                {
                    menuOpen &&
                    <div onClick={() => setMenuOpen(true)} className='menu-links'>
                        {
                            user &&
                            <div>
                                <div className='user-id'>
                                    <FaUser></FaUser>
                                    <p>
                                        <small>
                                            <span style={{ color: 'yellowgreen' }}>logged in</span>&nbsp;as&nbsp;
                                        </small>
                                        <span style={{ fontWeight: '700' }}>{user?.displayName}</span>
                                    </p>
                                </div>

                                <Link to='/' className='menu-option'>
                                    <FaHome></FaHome>
                                    <p>Home</p>
                                </Link>
                                <hr></hr>
                                <Link to='/services' className='menu-option'>
                                    <FaNotesMedical></FaNotesMedical>
                                    <p>Services</p>
                                </Link>
                                <hr></hr>
                                <Link to={`/reviews/${user?.uid}`} className='menu-option'>
                                    <FaStar style={{ color: 'orangered' }}></FaStar>
                                    <p>My Reviews</p>
                                </Link>
                                <hr></hr>
                                <Link to='/add-service' className='menu-option'>
                                    <FaPencilAlt></FaPencilAlt>
                                    <p>Add Service</p>
                                </Link>
                                <hr></hr>
                                <Link className='menu-option'>
                                    <FaSignOutAlt></FaSignOutAlt>
                                    <p>Sign Out</p>
                                </Link>
                                <hr></hr>
                                <Link to='/blogs' className='menu-option'>
                                    <FaBookOpen></FaBookOpen>
                                    <p>Blogs</p>
                                </Link>
                            </div>
                        }
                    </div>
                }

            </div>

        </div>

    );
};

export default NavBar;