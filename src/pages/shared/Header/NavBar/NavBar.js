import React, { useContext, useState } from 'react';
import './NavBar.css'
import greyLogo from '../../../../assets/images/logo/logo.png'
import greenLogo from '../../../../assets/images/logo/green logo.png'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { FaHome, FaPen, FaPlusSquare, FaRegListAlt, FaSignInAlt, FaSignOutAlt, FaStar, FaUserAlt, FaUserPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';

const NavBar = () => {

    const [logo, setLogo] = useState('greyLogo')
    const [menuOpen, setMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign Out Successful')
            })
            .catch(() => {
                toast.error('Something Went Wrong')
            })
    }

    return (
        <div className='navbar'>
            {
                logo === 'greyLogo' ?
                    <img
                        className='logo'
                        onMouseOver={() => setLogo('greenLogo')}
                        src={greyLogo}
                        alt=''></img>
                    :
                    <img
                        className='logo'
                        onMouseLeave={() => setLogo('greyLogo')}
                        src={greenLogo}
                        alt=''></img>
            }

            <div className={`${menuOpen && 'menu-container'}`}>
                <div className={`menu ${menuOpen && 'menu-open'}`}>
                    <div onClick={() => setMenuOpen(!menuOpen)}
                        className='toggle-menuOpen-container'>
                        <div

                            className='toggle-menuOpen'>

                            <p className={` ${menuOpen && 'd-none'}`}>View Menu</p>
                            <p className={` ${menuOpen || 'd-none'} close-text`}>Close</p>

                            <div className='lines'>
                                <div className={`line ${menuOpen ? 'rotated-first-line' : 'first-line'}`}></div>
                                <div className={`line ${menuOpen ? 'rotated-second-line' : 'second-line'}`}></div>
                            </div>

                        </div>
                    </div>


                    {
                        menuOpen &&
                        <div className='menu-options'>

                            {
                                user &&
                                <div className='user-info'>
                                    <FaUserAlt></FaUserAlt>
                                    <p>Logged in as <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{user?.displayName}</span></p>
                                </div>
                            }


                            <div className='menu-option'>
                                <FaHome></FaHome>
                                <p>Home</p>
                            </div>

                            <div className='menu-option'>
                                <FaRegListAlt></FaRegListAlt>
                                <p>Services</p>
                            </div>

                            {
                                user ?
                                    <>
                                        <div className='menu-option'>
                                            <FaStar></FaStar>
                                            <p>My Reviews</p>
                                        </div>

                                        <div className='menu-option'>
                                            <FaPlusSquare></FaPlusSquare>
                                            <p>Add Service</p>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className='menu-option'>
                                            <FaSignInAlt></FaSignInAlt>
                                            <p>Sign in</p>
                                        </div>

                                        <div className='menu-option'>
                                            <FaUserPlus></FaUserPlus>
                                            <p>Create Account</p>
                                        </div>
                                    </>
                            }

                            <div className='menu-option'>
                                <FaPen></FaPen>
                                <p>Blog</p>
                            </div>

                            {
                                user &&
                                <div onClick={handleSignOut} className='menu-option'>
                                    <FaSignOutAlt></FaSignOutAlt>
                                    <p>Sign Out</p>
                                </div>
                            }


                        </div>
                    }
                </div>
            </div>


        </div>
    );
};

export default NavBar;