import React, { useContext, useState } from 'react';
import './NavBar.css'
import greyLogo from '../../../../assets/images/logo/logo.png'
import greenLogo from '../../../../assets/images/logo/green logo.png'
import { AuthContext } from '../../../../contexts/AuthProvider';
import { FaHome, FaPen, FaPlusSquare, FaRegListAlt, FaSignInAlt, FaSignOutAlt, FaStar, FaUserAlt, FaUserPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [logo, setLogo] = useState('greyLogo')

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
            <Link to='/'>
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
            </Link>

            <div className={`${menuOpen ? 'menu-container' : 'hidden-menu-container'}`}>
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

                            <Link
                                onClick={() => setMenuOpen(false)}
                                className='menu-option-link'
                                to='/'>
                                <div className='menu-option'>
                                    <FaHome></FaHome>
                                    <p>Home</p>
                                </div>
                            </Link>

                            <Link
                                onClick={() => setMenuOpen(false)}
                                className='menu-option-link'
                                to='/services'>
                                <div className='menu-option'>
                                    <FaRegListAlt></FaRegListAlt>
                                    <p>Services</p>
                                </div>
                            </Link>

                            {
                                user ?
                                    <>
                                        <Link
                                            onClick={() => setMenuOpen(false)}
                                            className='menu-option-link'
                                            to='/my-reviews'>
                                            <div className='menu-option'>
                                                <FaStar></FaStar>
                                                <p>My Reviews</p>
                                            </div>
                                        </Link>

                                        <Link
                                            onClick={() => setMenuOpen(false)}
                                            className='menu-option-link'
                                            to='/add-service'>
                                            <div className='menu-option'>
                                                <FaPlusSquare></FaPlusSquare>
                                                <p>Add Service</p>
                                            </div>
                                        </Link>

                                    </>
                                    :
                                    <>

                                        <Link
                                            onClick={() => setMenuOpen(false)}
                                            className='menu-option-link'
                                            to='/signin'>
                                            <div className='menu-option'>
                                                <FaSignInAlt></FaSignInAlt>
                                                <p>Sign in</p>
                                            </div>
                                        </Link>

                                        <Link
                                            onClick={() => setMenuOpen(false)}
                                            className='menu-option-link'
                                            to='/create-account'>
                                            <div className='menu-option'>
                                                <FaUserPlus></FaUserPlus>
                                                <p>Create Account</p>
                                            </div>
                                        </Link>
                                    </>
                            }

                            <Link
                                onClick={() => setMenuOpen(false)}
                                className='menu-option-link'
                                to='/blog'>
                                <div className='menu-option'>
                                    <FaPen></FaPen>
                                    <p>Blog</p>
                                </div>
                            </Link>


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


        </div >
    );
};

export default NavBar;